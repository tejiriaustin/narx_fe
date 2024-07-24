<template>
  <div class="forgot-password-container">
    <div class="forgot-password-card">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Solar Panel" class="solar-panel">
        <h1 class="app-name">Solarview</h1>
      </div>
      <form @submit.prevent="handleForgotPassword" class="forgot-password-form">
        <InputBox
            id="email"
            v-model="email"
            label="Email"
            type="password"
            placeholder="Enter your Email"
            :required="true"
            :error-message="emailError"
        />
      </form>
      <div>
        <div class="link">
          <a href="/forgot-password">Sign Up</a>
        </div>
        <div class="link">
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import InputBox from "@/components/InputBox.vue";

const router = useRouter();
const store = useStore();

const email = ref('');
const emailError = ref('');


const handleForgotPassword = async () => {

  if (!email.value) {
    emailError.value = 'Email is required';
  }
  setTimeout(() => {
    // Assuming login is successful
    store.dispatch('setLoggedIn', true);
    router.push('/home');
  }, 1000);
}
</script>

<style>
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;}

.forgot-password-card {
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
  color: #4CAF50;
  font-weight: bold;
}

.forgot-password-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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