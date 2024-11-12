<template>
  <div id="collectibles-container">
    <h2 id="user-info" class="user-info">
      <span id="user-name">{{ userName }} ({{ userAddress }})</span>
      <span id="spacer" class="spacer"></span>
      <span id="user-details" class="user-details">
        Level: {{ userLevel }} | 
        WAX: {{ userWax }} | 
        1Dan: {{ user1Dan }}
      </span>
    </h2>

    <p id="feedback-message" v-if="feedback" class="feedback">{{ feedback }}</p>

    <!-- Prompt Dialog for collectible Template ID -->
    <PromptDialog
      v-if="isPromptVisible"
      :isVisible="isPromptVisible"
      title="Collectible TEMPLATE_ID"
      placeholder="number, no leading '#'"
      @submit="handlePromptSubmit"
      @close="handlePromptClose"
      id="prompt-dialog"
    />

    <!-- Confirm Dialog for Removing Collectible -->
    <ConfirmDialog
      v-if="isConfirmVisible"
      :isVisible="isConfirmVisible"
      title="Remove Collectible"
      message="Are you sure you want to remove this collectible?"
      @confirm="handleConfirmRemove"
      @cancel="handleCancelRemove"
      id="confirm-dialog"
    />
    
    <!-- Commands Area -->
    <div id="commands">
      <button id="add-collectible-btn" @click="addCollectible">Add Collectible</button>
    </div>
    
    <!-- Scrollable Collectibles List -->
    <div id="scrollable-collectibles" class="scrollable-collectibles">
      <div 
        v-if="collectibles.length > 0" 
        id="collectibles-list"
      >
        <div 
          v-for="(collectible, index) in collectibles" 
          :key="collectible.collectible_id" 
          class="collectible"
          :id="'collectible-' + collectible.collectible_id"
        >
          <span class="collectible-index" :id="'collectible-index-' + index">{{ formatIndex(index + 1) }}</span>
          <button 
            :id="'remove-collectible-btn-' + collectible.collectible_id" 
            @click="removeCollectible(collectible.collectible_id)"
          >
            Remove
          </button>
          {{ collectible.name }} | {{ collectible.collectible_id }} |
          <a 
            :href="collectible.url" 
            target="_blank"
            :id="'collectible-url-' + collectible.collectible_id"
          >
            {{ collectible.url.replace(/^https?:\/\//, '') }}
          </a> |
          {{ collectible.price }} WAX
        </div>
      </div>
      <p id="no-collectibles" v-else>No collectibles in game.</p>
    </div>
  </div>
</template>

<script>
import config from '../config.js';
import PromptDialog from './PromptDialog.vue';
import ConfirmDialog from './ConfirmDialog.vue';

export default {
  name: "Collectibles",
  components: {
    PromptDialog,
    ConfirmDialog,
  },
  props: {
    userId: {
      type: [String, Number, null],
      required: true,
    },
    userName: {
      type: String,
      required: false,
      default: '',
    },
    userAddress: {
      type: String,
      required: false,
      default: '',
    },
    userLevel: {
      type: [String, Number],
      required: false,
      default: 0,
    },
    userWax: {
      type: Number,
      required: false,
      default: 0,
    },
    user1Dan: {
      type: Number,
      required: false,
      default: 0,
    },
    viewing: {
      type: Boolean,
      default: false,
    },
    resetFeedback: {
      type: Boolean,
      default: false,
    },
  },
  data() {
      return {
        feedback: "",
        collectibles: [],
        wax: null,
        dialogTitle: '',
        dialogMessage: '',
        isDialogVisible: false,
        isPromptVisible: false,
        isConfirmVisible: false,
        supportedCollection: {
          name: "1Dan Nightmares",
          address: "ainightmares",
          standard: "atomicassets"
        },
      };
    },
  watch: {
    userId(newUserId, oldUserId) {
      console.log('oldUserId / newUserId:', oldUserId, newUserId);
      if (newUserId !== oldUserId) {
        this.fetchCollectibles();
      }
    },
    userAddress(newUserAddress) {
        console.log('Updated Level:', newUserAddress);
    },
    userLevel(newValue) {
      console.log('Updated Level:', newValue);
    },
    userWax(newValue) {
      console.log('Updated WAX:', newValue);
    },
    user1Dan(newValue) {
      console.log('Updated 1Dan:', newValue);
    }
  },
  mounted() {
    console.log("Collectibles mounted, userId:", this.userId, "userName:", this.userName, "userAddress:", this.userAddress);
    if (this.userId) {
      this.fetchCollectibles();
    }
  },
  methods: {
    async fetchCollectibles() {
      this.feedback = "";
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("User is not authenticated. Token is missing.");
        }
        const response = await fetch(`${config.apiUrl}/collectibles/search?owner_id=${this.userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` ,
            "X-API-Key": `${config.apiKey}`,
          }
        });
        const data = await response.json();
        this.collectibles = Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("Error fetching collectibles:", error);
        this.feedback = `Error fetching collectibles: ${error.message}`
      }
    },

    addCollectible() {
      console.log("Add Collectible button clicked, showing prompt dialog");
      this.isPromptVisible = true;
    },

    async handlePromptSubmit(templateId) {
      // Validate the entered template ID
      if (!/^\d{1,10}$/.test(templateId)) {
        this.feedback = "Template ID must be a number with just digits.";
        return;
      }

      // If validation passes, hide the dialog
      this.feedback = "";
      this.isPromptVisible = false;

      try {
        // Proceed with adding the collectible as before
        await this.addCollectibleWithTemplateId(templateId);
      } catch (error) {
        console.error("Error adding collectible with template ID:", error);
      }
    },

    handlePromptClose() {
      this.isPromptVisible = false;
    },

    async addCollectibleWithTemplateId(templateId) {
      this.feedback = `Adding collectible with Template id: ${templateId}`;

      try {
          await this.addCollectibleToBackend({
            userAddress: this.userAddress,
            collectibleId: templateId
          });
          if (this.viewing) {
            this.$emit("fetch-users");
            this.$emit("fetch-viewing-user-details", this.userAddress); 
          } else {
            this.$emit("fetch-user-details", this.userAddress);
          }
          this.fetchCollectibles();
        } catch (error) {
          console.error("Error adding collectible:", error);
          this.feedback = `Error adding collectible with temlate id '${templateId}': ${error.message}`
      }
    },

    async addCollectibleToBackend(collectible) {
      // Retrieve the auth token from local storage
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("User is not authenticated. Token is missing.");
      }

      // Set up the request with token in the Authorization header
      const response = await fetch(`${config.apiUrl}/collectibles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "X-API-Key": `${config.apiKey}`,
        },
        body: JSON.stringify({
          user_address: collectible.userAddress,   // Adjust to match expected backend fields
          collectible_id: collectible.collectibleId
        })
      });

      // Check if the response was successful
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add collectible:", errorData.detail);
        throw new Error(errorData.detail);
      }

      console.log("Collectible added successfully");
    },

    async removeCollectible(collectibleId) {
      this.collectibleToRemove = collectibleId;
      this.isConfirmVisible = true;
    },

    async handleConfirmRemove() {
      this.isConfirmVisible = false;
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("User is not authenticated. Token is missing.");
        }
        const response = await fetch(`${config.apiUrl}/collectibles/${this.collectibleToRemove}`, {
          method: "DELETE",
          headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "X-API-Key": `${config.apiKey}`,
          },
        });

        if (response.ok) {
          if (this.viewing) {
            this.$emit("fetch-users");
            this.$emit("fetch-viewing-user-details", this.userAddress);
          } else {
            this.$emit("fetch-user-details", this.userAddress);
          }
          this.fetchCollectibles();
          this.feedback = "";
        } else {
          throw new Error("Failed to remove collectible.");
        }
      } catch (error) {
        console.error("Error removing collectible:", error);
        this.feedback = `Error removing collectible: ${error.message}`;
      } finally {
        this.collectibleToRemove = null;
      }
    },

    handleCancelRemove() {
      this.isConfirmVisible = false;
      this.collectibleToRemove = null;
    },

    formatIndex(index) {
      // Pad index to a 4-character width with spaces
      return String(index).padStart(4, ' ');
    },
    logout() {
      try {
        this.wax.logout();
      } catch (error) {
        console.error("Error during WAX Cloud Wallet logout:", error);
      }
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

.feedback {
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: inherit; /* This keeps the same text color as the surrounding text */
}

/* Scrollable Collectibles Container */
.scrollable-collectibles {
    max-height: 400px; /* Set a maximum height to allow scrolling */
    overflow-y: auto; /* Enable vertical scrolling */
    border: 1px solid #444; /* Darker border for dark theme */
    padding: 10px;
    border-radius: 5px;
    background-color: #2c2c2c; /* Darker background inside the scrollable area */
    color: #f5f5dc; /* Cream-colored font for text inside the scrollable area */
}

/* Collectible Index Styling */
.collectible-index {
    display: inline-block;
    width: 4rem; /* Allocate 4 character spaces */
    text-align: right;
    margin-right: 10px;
    color: #d3d3d3; /* Lighter grey for collectible index */
}

.collectible {
  margin-bottom: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.spacer {
  display: inline-block;
  width: 2rem; /* This can be adjusted to set a width equivalent to 5 characters */
}

.user-details {
  margin-left: 0.5rem; /* This can be adjusted to create a smaller space after the spacer */
}

</style>
