<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Solar Panel" class="solar-panel">
        <h1 class="app-name">Solarview</h1>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <InputBox
            id="email"
            v-model="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            :required="true"
            :error-message="emailError"
        />
        <InputBox
            id="password"
            v-model="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            :required="true"
            :error-message="passwordError"
        />
        <button type="submit" class="login-button">Log In</button>
      </form>
      <div>
        <div class="link">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <div class="link">
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import InputBox from "@/components/InputBox.vue";

const router = useRouter();
const store = useStore();

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const handleLogin = () => {
  emailError.value = '';
  passwordError.value = '';

  // Basic validation
  if (!email.value) {
    emailError.value = 'Email is required';
  } else if (!isValidEmail(email.value)) {
    emailError.value = 'Please enter a valid email address';
  }

  if (!password.value) {
    passwordError.value = 'Password is required';
  }

  if (!emailError.value && !passwordError.value) {
    // Your login logic here
    console.log('Login attempt with:', email.value, password.value);

    // Simulate an API call
    setTimeout(() => {
      // Assuming login is successful
      store.dispatch('setLoggedIn', true);
      router.push('/home');
    }, 1000);
  }
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
}

.login-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.logo-container {
  text-align: center;
  margin-bottom: 2rem;
}

.solar-panel {
  width: 60px;
  height: auto;
}

.app-name {
  margin-top: 10px;
  font-size: 24px;
  color: #4CAF50; /* Green color */
  font-weight: bold;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #45a049;
}

.link {
  text-align: center;
  margin-top: 1rem;
}

.link a {
  color: #4CAF50;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}
</style>