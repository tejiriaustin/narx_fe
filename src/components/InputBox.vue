<template>
  <div class="input-wrapper">
    <div class="input-container">
      <input
          :id="id"
          :type="type"
          :value="modelValue"
          @input="updateValue"
          :placeholder="placeholder"
          :required="required"
          :disabled="disabled"
          :class="{ 'is-invalid': !!errorMessage }"
      />
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  if (!props.disabled) {
    emit('update:modelValue', event.target.value);
  }};
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.input-container {
  position: relative;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
}

input.is-invalid {
  border-color: #dc3545;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>