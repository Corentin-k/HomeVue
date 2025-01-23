<template>
  <div>
    <h2>Temperature and Humidity Evolution</h2>
    <line-chart :data="temperatureData" :min="0" title="Temperature"></line-chart>
    <line-chart :data="humidityData" :min="0" title="Humidity"></line-chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import LineChart from "vue-chartkick";
import 'chartkick/chart.js';
import axios from 'axios';

export default defineComponent({
  components: {
    LineChart
  },
  setup() {
    const temperatureData = ref([]);
    const humidityData = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/sensor/data');
        const data = response.data;
        console.log('Received sensor data:', data);

        temperatureData.value = data.map((item: { timestamp: any; temperature: any; }) => [item.timestamp, item.temperature]);
        humidityData.value = data.map((item: { timestamp: any; humidity: any; }) => [item.timestamp, item.humidity]);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      temperatureData,
      humidityData,
    };
  },
});
</script>

<style scoped>
h2 {
  color: var(--default-color);
  text-align: center;
}
</style>
