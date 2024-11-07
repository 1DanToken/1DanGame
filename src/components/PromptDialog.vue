<template>
  <div v-if="isVisible" class="prompt-dialog-overlay">
    <div class="prompt-dialog">
      <h3>{{ title }}</h3>
      <input 
        type="text" 
        v-model="inputValue" 
        :placeholder="placeholder"
        @keydown.enter="submit"
      />
      <div class="actions">
        <button @click="submit">Submit</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromptDialog',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Prompt'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    submit() {
      if (this.inputValue.trim()) {
        this.$emit('submit', this.inputValue.trim());
      }
    }
  }
};
</script>

<style scoped>
/* Prompt Dialog Overlay */
.prompt-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75); /* Darker overlay for a subtle dimming effect */
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Prompt Dialog Box */
.prompt-dialog {
    background: #333333; /* Dark background for the dialog box */
    color: #f5f5dc; /* Cream-colored text for readability */
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    max-width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Soft shadow for a floating effect */
}

/* Input Field Styling for Dark Theme (if present inside prompt-dialog) */
.prompt-dialog input[type="text"],
.prompt-dialog input[type="password"],
.prompt-dialog textarea {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    background-color: #555555; /* Darker input background */
    color: #f5f5dc; /* Cream-colored text inside input fields */
    border: 1px solid #777777; /* Darker border for input fields */
}

/* Input Field Focus State */
.prompt-dialog input[type="text"]:focus,
.prompt-dialog input[type="password"]:focus,
.prompt-dialog textarea:focus {
    outline: none;
    border-color: #999999; /* Slightly lighter border on focus */
}

.actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
