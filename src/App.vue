<template>
  <div id="app">
    <h1 id="title">1Dan Nightmares Game</h1>
    <div id="version" class="version">Version 1.3.3</div>
    <Login 
      ref="login" 
      v-show="!isLoggedIn" 
      @login-success="handleLoginSuccess" 
      @user-created="handleUserCreated" 
      :resetFeedback="resetFeedback" 
      id="login-component"
    />

    <!-- Logout Button -->
    <div v-if="isLoggedIn" id="logout-container">
      <button @click="handleLogout">Logout</button>
    </div>

    <Users
      ref="users" 
      v-if="isLoggedIn && userRole === 'admin'"
      @view-collectibles="viewCollectiblesForUser"
      id="users-component"
    />
    <Collectibles 
      v-if="isLoggedIn && (userRole === 'gamer' || viewingCollectibles)"
      :viewing="viewingCollectibles"
      :userId="viewingCollectibles ? viewingUserId : userId" 
      :userName="viewingCollectibles ? viewingUserName : userName" 
      :userAddress="viewingCollectibles ? viewingUserAddress : userAddress"
      :userLevel="viewingCollectibles ? viewingUserLevel : userLevel"
      :userWax="viewingCollectibles ? viewingUserWax : userWax"
      :user1Dan="viewingCollectibles ? viewingUser1Dan : user1Dan"
      @logout="handleLogout"
      @fetch-users="fetchUsers"
      @fetch-user-details="fetchUserDetails"
      @fetch-viewing-user-details="fetchViewingUserDetails"
      id="collectibles-component"
    />

    <!-- Toggle Button for Help -->
    <button @click="toggleHelp" id="toggle-help-button">
      {{ showHelp ? "Hide Help" : "Show Help" }}
    </button>

    <!-- Scrollable Help Section -->
    <div id="help-section" class="markdown-content" v-html="renderedMarkdown" v-show="showHelp"></div>
  
  </div>
</template>


<script>
import config from './config.js';
import MarkdownIt from 'markdown-it';
import HelpMarkdown from './Help.md';
import Login from './components/Login.vue';
import Collectibles from './components/Collectibles.vue';
import Users from './components/Users.vue';

export default {
  name: 'App',
  components: {
    Login,
    Collectibles,
    Users,
  },
  data() {
    return {
      isLoggedIn: false,
      userId: null,
      userName: null,
      userAddress: null,
      userRole: null,
      userLevel: null,
      userWax: null,
      user1Dan: null,
      resetFeedback: false,
      showHelp: false,
      markdownText: HelpMarkdown,
      viewingCollectibles: false,
      viewingUserId: null,
      viewingUserName: null,
      viewingUserAddress: null,
      viewingUserLevel: null,
      viewingUserWax: null,
      viewingUser1Dan: null,
    };
  },
  computed: {
    renderedMarkdown() {
      const md = new MarkdownIt();
      return md.render(this.markdownText);
    },
  },
  mounted() {
    const storedUserAddress = localStorage.getItem("userAddress");
    if (storedUserAddress) {
      this.userAddress = storedUserAddress;
      this.fetchUserDetails(this.userAddress)
        .then((success) => {
          if (success) {
            this.isLoggedIn = true;
          } else {
            console.error("Failed to log in automatically due to missing or invalid user data.");
            this.handleLogout();
          }
        })
      .catch((error) => {
        console.error("Failed to fetch user details on mount:", error);
        this.handleLogout();
      });
    }
  },
  methods: {
    async handleLoginSuccess(userAccount) {
      try {
        this.userAddress = userAccount;
        localStorage.setItem("userAddress", this.userAddress);
        const response = await fetch(`${config.apiUrl}/users/${userAccount}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (response.ok) {
          const userData = await response.json();
          this.userId = userData.id;
          this.userName = userData.name;
          this.userAddress = userData.url;
          this.userRole = userData.role;
          this.userLevel = userData.level;
          this.userWax = userData.wax;
          this.user1Dan = userData.onedan;
          this.isLoggedIn = true;
        } else {
          console.error("Failed to fetch user data");
          this.userName = "Unknown User";
          this.userAddress = "";
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        this.userName = "Unknown User";
        this.userAddress = "";
      }
    },
    async fetchUserDetails(address) {
      try {
        const response = await fetch(`${config.apiUrl}/users/${address}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (response.ok) {
          const userData = await response.json();
          this.userId = userData.id;
          this.userName = userData.name;
          this.userAddress = userData.url;
          this.userRole = userData.role;
          this.userLevel = userData.level;
          this.userWax = userData.wax;
          this.user1Dan = userData.onedan;
          console.log("User details fetched successfully:", userData);
          return true;
        } else {
          console.error("Failed to fetch user details");
          return false;
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        return false;
      }
    },
    async fetchViewingUserDetails(address) {
      try {
        const response = await fetch(`${config.apiUrl}/users/${address}`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (response.ok) {
          const userData = await response.json();
            this.viewingUserId = userData.id;
            this.viewingUserName = userData.name;
            this.viewingUserAddress = userData.url;
            this.viewingUserRole = userData.role;
            this.viewingUserLevel = userData.level;
            this.viewingUserWax = userData.wax;
            this.viewingUser1Dan = userData.onedan;
          console.log("Viewing User details fetched successfully:", userData);
          return true;
        } else {
          console.error("Failed to fetch Viewing user details");
          return false;
        }
      } catch (error) {
        console.error("Error fetching Viewing user details:", error);
        return false;
      }
    },
    fetchUsers() {
      this.$refs.users.fetchUsers();
    },
    handleUserCreated(newUser) {
      this.fetchUserDetails(this.userAddress);
      this.isLoggedIn = true;
      console.log("User created successfully:", newUser);
    },
    viewCollectiblesForUser(user) {
      this.viewingUserId = user.id;
      this.viewingUserName = user.name;
      this.viewingUserAddress = user.url;
      this.viewingUserLevel = user.level;
      this.viewingUserWax = user.wax;
      this.viewingUser1Dan = user.onedan;
      this.viewingCollectibles = true;
    },
    handleLogout() {
      try {
        if (this.wax && typeof this.wax.logout === "function") {
          this.wax.logout();
        }
      } catch (error) {
        console.error("Error during WAX Cloud Wallet logout:", error);
      }
      this.isLoggedIn = false;
      this.viewingCollectibles = false;
      this.userId = null;
      this.userName = null;
      this.userAddress = null;
      this.userRole = null;
      this.userLevel = null;
      this.userWax = null;
      this.user1Dan = null;
      this.viewingUserId = null;
      this.viewingUserName = null;
      this.viewingUserAddress = null;
      this.viewingUserLevel = null;
      this.viewingUserWax = null;
      this.viewingUser1Dan = null;
      this.resetFeedback = true;
      localStorage.removeItem("userAddress");
      setTimeout(() => {
        this.resetFeedback = false;
      }, 0);
      console.log("User has been logged out");
    },
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
  },
};
</script>

<style scoped>
.version {
  font-size: 0.9rem;
  color: #888;
  margin-top: -10px; 
  margin-bottom: 20px; 
  text-align: center; 
}

#logout-container {
  margin-top: 20px;
  text-align: left;
}

#toggle-help-button {
  margin: 10px 0;
  margin-left: 20px;
}

.markdown-content {
    padding: 20px;
    background-color: #2c2c2c; /* Dark background for markdown content */
    color: #f5f5dc; /* Cream-colored font for readability */
    border: 1px solid #444; /* Darker border to match the dark theme */
    border-radius: 5px;
    max-height: 400px; /* Set a maximum height for scrolling */
    overflow-y: auto; /* Enable vertical scrolling */
}

/* Markdown-specific styling */
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
    color: #dcdcdc; /* Light grey color for headings */
    margin-top: 1em;
}

.markdown-content p {
    margin: 1em 0;
    line-height: 1.6;
}

.markdown-content a {
    color: #66c2ff; /* Light blue for links */
    text-decoration: underline;
}

.markdown-content a:hover {
    color: #99d6ff; /* Slightly lighter blue on hover */
}

.markdown-content code {
    background-color: #444; /* Dark grey for inline code blocks */
    color: #f5f5dc; /* Cream-colored text */
    padding: 2px 4px;
    border-radius: 3px;
}

.markdown-content pre {
    background-color: #444; /* Dark grey for code blocks */
    color: #f5f5dc; /* Cream-colored text */
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto; /* Horizontal scrolling for code blocks */
}

.markdown-content blockquote {
    border-left: 4px solid #666; /* Darker border for blockquotes */
    color: #dcdcdc; /* Light grey for blockquote text */
    padding: 10px 15px;
    margin: 1em 0;
    background-color: #333; /* Slightly darker background for blockquotes */
}

</style>

