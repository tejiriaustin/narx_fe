<template>
  <div class="device-usage">
    <img :src="getDeviceImage(device.name)" :alt="device.name" />
    <div class="device-info">
      <h3>{{ device.name }}</h3>
      <p>{{ device.usage }} kWh</p>
      <p>{{ device.units }} units</p>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

// const props = defineProps(['device'])

function getDeviceImage(deviceName) {
  // Logic to return the correct image path based on device name
  return `./assets/${deviceName.toLowerCase()}.png`
}
</script>