<!-- src/components/SplashScreen.vue -->
<template>
  <div class="splash-screen">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Solar Panel" class="solar-panel">
      <h1 class="app-name">Solarview</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useStore} from "vuex";

console.log("splash-screen");
const router = useRouter();
const route = useRoute();
const store = useStore();

onMounted(() => {
  setTimeout(() => {
    const redirectPath = route.query.redirect || '/login';
    store.dispatch('setSplashScreenShown', true);
    router.replace(redirectPath.toString());
  }, 1500);
});
</script>

<style scoped>
.splash-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.logo-container {
  position: relative;
  text-align: center;
}

.solar-panel {
  width: 100px;
  height: auto;
}

.sun {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: auto;
}

.app-name {
  margin-top: 10px;
  font-size: 24px;
  color: #4CAF50;
  font-weight: bold;
}
</style>