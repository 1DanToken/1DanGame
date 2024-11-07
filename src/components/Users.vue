<template>
  <div id="users-component">
    <h2>Gamers</h2>

    <p id="feedback-message" v-if="feedback" class="feedback">{{ feedback }}</p>

    <div id="users-list" class="user-scrollable-list">
      <div 
        v-for="(user, index) in users" 
        :key="user.id" 
        class="user-item" 
        @click="viewCollectibles(user)"
      >
        <span class="user-index">{{ formatIndex(index + 1) }}</span>
        {{ user.name }} ({{ user.url }}) | Level: {{ user.level }} | WAX: {{ user.wax.toFixed(2) }} | 1Dan: {{ user.onedan.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config.js';

export default {
  name: "Users",
  data() {
    return {
      feedback: "",
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.feedback = 'Fetching users';
      try {
        const response = await fetch(`${config.apiUrl}/users`, {
          method: "GET",
          headers: {
            "X-API-Key": `${config.apiKey}`, 
          }
        });
        if (response.ok) {
          this.users = await response.json();
        } else {
          this.feedback = "Failed to fetch users";
          console.error("Failed to fetch users");
        }
      } catch (error) {
        this.feedback = `Failed to fetch users: ${error}`;
        console.error("Error fetching users:", error);
      }
      console.log("Fetched user details");
      this.feedback = "";
    },
    viewCollectibles(user) {
      this.feedback = '';
      this.$emit("view-collectibles", user);
    },
    formatIndex(index) {
      return index.toString().padStart(4, ' ');
    },
  },
};
</script>

<style scoped>
.feedback {
  margin-left: 20px;
}

#users-container {
  padding: 20px;
}

#users-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.user-scrollable-list {
  max-height: 400px; /* Adjust height as needed */
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #444; /* Darker border for dark theme */
  padding: 10px;
  border-radius: 5px;
  background-color: #2c2c2c; /* Darker background inside the scrollable area */
  color: #f5f5dc; /* Cream-colored font for text inside the scrollable area */
}

.user-item {
  margin-bottom: 10px;
  cursor: pointer;
}

.user-index {
  display: inline-block;
  width: 4rem; /* Allocate 4 character spaces */
  text-align: right;
  margin-right: 10px;
  color: #555;
}
</style>
