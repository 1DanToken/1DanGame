<template>
  <div v-if="isVisible" class="confirm-dialog-overlay">
    <div class="confirm-dialog">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button @click="confirm" class="confirm-button">Yes</button>
      <button @click="cancel" class="cancel-button">No</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Confirm",
    },
    message: {
      type: String,
      default: "Are you sure?",
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
/* Confirm Dialog Overlay */
.confirm-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75); /* Darker overlay for the dark theme */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Confirm Dialog Box */
.confirm-dialog {
    background: #333333; /* Dark background for the dialog box */
    color: #f5f5dc; /* Cream-colored text */
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Soft shadow for better visibility */
}

/* General Button Styling */
button {
    margin: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #f5f5dc; /* Cream-colored text for consistency across all buttons */
}

/* Confirm Button */
.confirm-button {
    background-color: #28a745; /* Green background for confirm button */
    color: #f5f5dc; /* Cream-colored text for readability */
}

.confirm-button:hover {
    background-color: #218838; /* Darker green on hover */
}

/* Cancel Button */
.cancel-button {
    background-color: #dc3545; /* Red background for cancel button */
    color: #f5f5dc; /* Cream-colored text for readability */
}

.cancel-button:hover {
    background-color: #c82333; /* Darker red on hover */
}

</style>
