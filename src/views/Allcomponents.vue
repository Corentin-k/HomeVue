<template>
  <div id="chart-div">
    <h2>Temperature and Humidity Evolution</h2>
    <div class="chart-container">
      <line-chart :data="temperatureData" :min="0" title="Temperature" :library="chartOptions"></line-chart>
    </div>
    <div class="chart-container">
      <line-chart :data="humidityData" :min="0" title="Humidity" :library="chartOptions"></line-chart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'TemperatureHumidityChart',
  setup() {
    const temperatureData = ref([]);
    const humidityData = ref([]);

    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2, // Adjust the aspect ratio as needed
      scales: {
        y: {
          ticks: {
            color: '#ffffff', // Change y-axis labels color
            beginAtZero: true
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)', // Change y-axis grid color
          }
        },
        x: {
          ticks: {
            color: '#ffffff', // Change x-axis labels color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)', // Change x-axis grid color
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ffffff' // Change legend text color
          }
        }
      },
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/sensor/data');
        const data = response.data;
        console.log('Received sensor data:', data);

        if (Array.isArray(data)) {
          temperatureData.value = data.map(item => [item.timestamp, item.temperature]);
          humidityData.value = data.map(item => [item.timestamp, item.humidity]);
        } else {
          console.error('Data format is incorrect:', data);
        }
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
      chartOptions,
    };
  },
});
</script>

<style scoped>
#chart-div{
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h2 {

  color: #03dac6;
  text-align: center;
}

.chart-container {
  width: 80%; /* Adjust the width as needed */
  max-width: 600px; /* Set a maximum width */
  margin: 0 auto; /* Center the container */
  padding: 20px;
  background-color: #1e1e1e; /* Background color to match the theme */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add a shadow for better visual */
}
</style>
