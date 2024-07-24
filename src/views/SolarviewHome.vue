<template>
  <div class="solarview-home">
    <h1>Home</h1>
    <div class="energy-usage">
      <h2>Today's energy usage</h2>
      <p>{{ energyUsage }} kWh</p>
    </div>
    <div class="system-status">
      <!-- System status information -->
    </div>
    <div class="devices">
      <h2>Devices</h2>
      <DeviceUsage v-for="device in devices" :key="device.id" :device="device" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DeviceUsage from '@/components/DeviceUsage.vue'

const energyUsage = ref(2.5)
const devices = ref([
  { id: 1, name: 'Refrigerator', usage: 2.5, units: 2 },
  { id: 2, name: 'Air conditioner', usage: 2.5, units: 2 },
  { id: 3, name: 'Lights', usage: 2.5, units: 3 },
])
</script>