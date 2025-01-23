<template>
  <div class="container-settings">
    <h2>Settings</h2>
    <div>
      <label for="color">Choose Default Color:</label>
      <select id="color" v-model="selectedColor" @change="updateColor">
        <option value="#bb86fc">Purple</option>
        <option value="#2196F3">Blue</option>
        <option value="#4CAF50">Green</option>
      </select>
    </div>
    <div>
      <label for="language-switch">Choose Language:</label>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useUserStore } from '@/store/userStore'; // Import the store created with Pinia
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Settings',
  setup() {
    const userStore = useUserStore(); // Use Pinia store for user state management
    const { locale } = useI18n();
    const selectedColor = ref(userStore.userColor);
    const selectedLanguage = ref(locale.value);

    const updateColor = async () => {
        const userData = userStore.userData;

        if (!userData) {
          console.error('User data is not available. Please log in.');
          return;
        }

        if (!userData.email) {
          console.error('User data does not contain a email.');
          return;
        }

        try {
          await userStore.setDefaultColor(selectedColor.value);
          console.log('Color updated successfully');
        } catch (error) {
          console.error('Failed to update color:', error);
        }
    };  


    onMounted(() => {
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    try {
      const parsedUserData = JSON.parse(storedUserData);
      userStore.setUserData(parsedUserData);
    } catch (error) {
      console.error('Failed to parse user data from localStorage:', error);
    }
  }
  selectedColor.value = userStore.userColor;
});


    return {
      selectedColor,
      selectedLanguage,
      updateColor,

    };
  },
});
</script>

<style scoped>
.container-settings {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 2rem;
  max-width: 300px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
}

h2 {
  color: #03dac6;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: #b0b0b0;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: #ddd;
}

option {
  background-color: #333;
  color: #ddd;
  font-size: 1rem;
}
</style>
