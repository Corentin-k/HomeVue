import axios from 'axios';

const ESP32_URL = 'http://192.168.1.201';
const SERVER_URL = 'http://localhost:3000';
export async function setLedColor(color: string) {
  const rgb = hexToRgb(color);
  if (rgb) {
    await axios.get(`${ESP32_URL}/setColor`, { params: { r: rgb[0], g: rgb[1], b: rgb[2] } });
  }
}

export async function checkConnection() {
  try {
    const response = await axios.get(`${ESP32_URL}/status`);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw new Error('ESP32 not connected');
  }
}

function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

export async function getDHT11Data(): Promise<{ temperature: number; humidity: number }> {
  console.log('Calling ESP32 API...');
  const response = await fetch(`${ESP32_URL}/getDHT11Data`);
  console.log('Response status:', response.status);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  await saveSensorData(data);
  console.log('Parsed data:', data);
  return data;
}
async function saveSensorData(data: any) {
  try {
    await axios.post(`${SERVER_URL}/api/sensor/save-data`, data);
    console.log('Data saved to server');
  } catch (error) {
    console.error('Error saving data to server:', error);
  }
}