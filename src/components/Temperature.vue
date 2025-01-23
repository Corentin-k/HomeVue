<template>
  <div class="dht11-display">
    <h2>DHT11 Sensor Data</h2>
    <div v-if="error" class="error-message">ESP not connected</div>
    <div v-else-if="loading" class="loading-message">Loading...</div>
    <div v-else class="sensor-data">
      <div class="data-item">
        <font-awesome-icon :icon="['fas', 'thermometer-half']" />
        <span class="data-value">{{ temperature }}</span>
        <span class="data-label">Temperature</span>
      </div>
      <div class="data-item">
        <font-awesome-icon :icon="['fas', 'tint']" />
        <span class="data-value">{{ humidity }}</span>
        <span class="data-label">Humidity</span>
      </div>
    </div>
    <button @click="refreshData" class="refresh-button">
      <font-awesome-icon :icon="['fas', 'sync-alt']" /> Refresh
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getDHT11Data } from '@/services/esp32Service';

export default defineComponent({
  name: 'DHT11Display',
  data() {
    return {
      temperature: '',
      humidity: '',
      loading: true,
      error: false
    };
  },
  methods: {
    async refreshData() {
      this.loading = true;
      this.error = false;
      try {
        console.log('Fetching DHT11 data...');
        const data = await getDHT11Data();
        console.log('Received data:', data);
        if (data.temperature !== undefined && data.humidity !== undefined) {
          this.temperature = `${data.temperature.toFixed(1)}°C`;
          this.humidity = `${data.humidity.toFixed(1)}%`;
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching DHT11 data:', error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.refreshData();
  }
});
</script>

<style scoped>
:root {
  --default-color: #bb86fc;
}
.dht11-display {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #03dac6;
  margin-bottom: 1.5rem;
}

.sensor-data {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.data-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data-value {
  font-size: 2.5rem;
  color: var(--default-color);
  margin: 0.5rem 0;
  font-weight: bold;
}

.data-label {
  color: #03dac6;
  font-size: 1rem;
}

.refresh-button {
  padding: 0.75rem 1.5rem;
  background-color: #03dac6;
  color: #121212;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.refresh-button:hover {
  background-color: #00b3a6;
}

.refresh-button i {
  margin-right: 0.5rem;
}

i {
  font-size: 2rem;
  color: #03dac6;
}

.error-message, .loading-message {
  color: #ff5252;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
</style>
