<template>
  <div class="login" id="login-container">
    <div class="wallet-container" id="wallet-options">
      <h2 id="connect-wallet-title">Login with:</h2>
      <button id="cloud-wallet-button" @click="loginWithCloudWallet">Cloud Wallet</button>
      <button id="anchor-wallet-button" @click="loginWithAnchorWallet">Anchor Wallet</button>
    </div>
    <p v-if="feedback" class="feedback" id="feedback-message">{{ feedback }}</p>

    <!-- Prompt Dialog for User Name Input -->
    <PromptDialog
      v-if="isPromptVisible"
      id="username-prompt-dialog"
      :isVisible="isPromptVisible"
      title="New user, enter alias"
      placeholder="Your alias"
      @submit="handlePromptSubmit"
      @close="handlePromptClose"
    />
  </div>
</template>

<script>
import { WaxJS } from '@waxio/waxjs/dist';
import AnchorLink from 'anchor-link';
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport';
import config from '../config.js';
import PromptDialog from './PromptDialog.vue';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export default {
  name: "Login",
  components: {
    PromptDialog,
  },
  props: {
    resetFeedback: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      feedback: "",
      ualAnchor: null,
      isPromptVisible: false, 
      pendingWalletAddress: "",
    };
  },
  watch: {
    resetFeedback(newValue) {
      if (newValue) {
        this.feedback = "";
      }
    }
  },
  methods: {
    async loginWithCloudWallet() {
      try {
        this.wax = new WaxJS({
          rpcEndpoint: "https://wax.greymass.com",
          tryAutoLogin: false, // Disable auto-login
        });

        // Log in the user and get the account name
        const userAccount = await this.wax.login();

        this.feedback = `Login with: ${userAccount}`;

        // Check if the user needs to be created
        let response = await fetch(`${config.apiUrl}/users/${userAccount}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (!response.ok) {
          this.feedback = `Creating user: ${userAccount}`;
          await this.createUser(userAccount);
        }

        this.feedback = `Authenticating with ${userAccount}`;
        response = await fetch(`${config.apiUrl}/auth/challenge?address=${userAccount}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        const { challenge: memo } = await response.json();

        console.log(`Received challenge: ${memo}`);
        this.feedback = `Received login challenge: ${memo}`;

        const maxRetries = 3;
        let attempt = 0;
        let transactionSuccess = false;
        let toAccount = (userAccount == "eahq4.c.wam" ? "jwiq2.c.wam" : "eahq4.c.wam");

        while (attempt < maxRetries && !transactionSuccess) {
            try {
              attempt += 1;
              console.log(`Transaction attempt ${attempt} for user ${userAccount}`);
              this.feedback = `Attempt ${attempt} to verify ownership...`;

              // Send a transaction with the memo to verify ownership
              await this.wax.api.transact({
                  actions: [
                      {
                          account: 'eosio.token',
                          name: 'transfer',
                          authorization: [
                              {
                                  actor: userAccount,
                                  permission: 'active',
                              },
                          ],
                          data: {
                              from: userAccount,
                              to: toAccount,
                              quantity: "0.00000001 WAX",
                              memo: memo,
                          },
                      },
                  ],
              }, {
                  blocksBehind: 3,
                  expireSeconds: 30,
              });

              transactionSuccess = true; 
              this.feedback = "Transaction completed successfully!";
              console.log("Transaction sent with memo:", memo);

            } catch (error) {
              this.feedback = "Wallet transaction failed. Retrying...";
              await sleep(1000); 
            }
        }

        if (!transactionSuccess) {
            throw new Error("Transaction failed after multiple attempts.");
        }

        this.feedback = `It takes a moment to check authentication for ${userAccount}`;
        const loginResponse = await fetch(`${config.apiUrl}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "X-API-Key": `${config.apiKey}`
          },
          body: JSON.stringify({
            address: userAccount,
            memo: memo
          })
        });

        if (loginResponse.ok) {
          const { token } = await loginResponse.json();
          localStorage.setItem('authToken', token);

          this.$emit('login-success', userAccount);
          this.feedback = `Logged in as ${userAccount}`;
          console.log('Login successful!');
        } else {
          console.error('Login failed');
          this.feedback = 'Login failed. Please try again.';
        }
      } catch (error) {
        console.error('An error occurred during Cloud Wallet login:', error);
        this.feedback = `An error occurred during Cloud Wallet login, just try again: ${error.message || error}`;
      }
    },

    async loginWithAnchorWallet() {
      try {
        console.log('Network Configuration:', config.network);

        const transport = new AnchorLinkBrowserTransport();
        const link = new AnchorLink({
          transport,
          chains: [{
            chainId: config.network.chainId,
            nodeUrl: 'https://wax.greymass.com',
          }]
        });

        const connection = await link.login('1DanNightmaresGame');
        const userAccount = String(connection.session.auth.actor);
        const session = connection.session;

        // Check if the user needs to be created
        let response = await fetch(`${config.apiUrl}/users/${userAccount}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (!response.ok) {
          // Wait for createUser to complete
          await this.createUser(userAccount);
        }

        // Get the memo (challenge) from the server
        response = await fetch(`${config.apiUrl}/auth/challenge?address=${userAccount}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        const { challenge: memo } = await response.json();

        console.log(`Received memo from server: ${memo}`);
        this.feedback = `Received login challenge: ${memo}`;

        // Send a transaction with the memo to verify ownership
        try {
            await session.transact({
                actions: [
                    {
                        account: 'eosio.token',
                        name: 'transfer',
                        authorization: [
                            {
                                actor: userAccount,
                                permission: 'active',
                            },
                        ],
                        data: {
                            from: userAccount,
                            to: (userAccount == "eahq4.c.wam" ? "jwiq2.c.wam" : "eahq4.c.wam"),
                            quantity: "0.00000001 WAX",
                            memo: memo,
                        },
                    },
                ],
            }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
            console.log("Transaction sent with memo:", memo);
        } catch (error) {
            console.warn("Resource provider response error, but transaction was likely successful:", error);
        }

        this.feedback = `Signed login challenge. Veryfying user ...`;

        // Submit the memo back to the server for verification
        const loginResponse = await fetch(`${config.apiUrl}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "X-API-Key": `${config.apiKey}`
          },
          body: JSON.stringify({
            address: userAccount,
            memo: memo
          })
        });

        if (loginResponse.ok) {
          const { token } = await loginResponse.json();
          localStorage.setItem('authToken', token);

          this.$emit('login-success', userAccount);
          this.feedback = `Logged in as ${userAccount}`;
          console.log('Login successful!');
        } else {
          console.error('Login failed');
          this.feedback = 'Login failed. Please try again.';
        }      
      } catch (error) {
        console.error("Anchor Wallet Login Error:", error);
        this.feedback = "Error during Anchor Wallet login. Please try again.";
      }
    },

    async handlePromptSubmit(userName) {
      if (!userName || userName.length > 20 || !/^[a-zA-Z0-9 ]+$/.test(userName)) {
        this.feedback = "Invalid name. Only use up to 20 characters with letters, numbers, and spaces.";
        return;
      }

      try {
        const response = await fetch(`${config.apiUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${config.apiKey}`
          },
          body: JSON.stringify({
            name: userName,
            url: this.pendingWalletAddress,
            role: "gamer"
          }),
        });

        if (response.ok) {
          const newUser = await response.json();
          await this.createWallet(newUser.user_id, this.pendingWalletAddress);
          this.isPromptVisible = false;
          this._resolveUserCreation(newUser);
        } else {
          throw new Error("Failed to create user");
        }
      } catch (error) {
        this.feedback = "Error creating user. Please try again.";
        console.error("Error creating user:", error.message);
        this._rejectUserCreation(error);
      }
    },
    handlePromptClose() {
      // Close the prompt dialog
      this.isPromptVisible = false;
    },
    async createUser(userAccount) {
      this.pendingWalletAddress = userAccount;
      this.isPromptVisible = true;

      // Return a new Promise and store resolve/reject functions
      return new Promise((resolve, reject) => {
        this._resolveUserCreation = resolve;
        this._rejectUserCreation = reject;
      });
    },
    async createWallet(ownerId, walletAddress) {
      try {
        const response = await fetch(`${config.apiUrl}/wallets`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${config.apiKey}`
          },
          body: JSON.stringify({ owner_id: ownerId, address: walletAddress })
        });

        if (!response.ok) {
          throw new Error("Failed to create wallet");
        }
      } catch (error) {
        console.error("Error creating wallet:", error);
        this.feedback = "Error creating wallet. Please try again.";
      }
    },
    mounted() {
      console.log("PromptDialog mounted, isVisible:", this.isVisible);
    },
  },
};
</script>

<style scoped>
.wallet-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Add some space between the text and the button */
}

.wallet-container h2 {
  margin: 0;
  margin-left: 20px;
}

.wallet-container button {
  margin: 0; /* Ensures button stays next to the text */
}
</style>



