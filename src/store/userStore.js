import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
    token: null,
    color: '#bb86fc', // Valeur par défaut
  }),
  actions: {
    async register(credentials) {
      try {
        const { data } = await axios.post(`http://localhost:3000/api/auth/register`, credentials);
        this.setUserData(data);
      } catch (error) {
        throw new Error('Registration failed');
      }
    },
    async login(credentials) {
      try {
        console.log(credentials)
        const { data } = await axios.post(`http://localhost:3000/api/auth/login`, credentials);
        console.log(data);
        await this.setUserData(data);
      } catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
      }
    },
    async logout() {
      this.clearUserData();
    },
    async setUserData(userData) {
      this.userData = userData;
      this.token = userData.token;
      if(userData.color!==""){
        this.color = userData.color ;
      }
      // Assigner la couleur ou utiliser la couleur par défaut
      localStorage.setItem('userData', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    async clearUserData() {
      this.userData = null;
      this.token = null;
      this.color = '#bb86fc'; // Réinitialiser la couleur par défaut lors de la déconnexion
      localStorage.removeItem('userData');
      axios.defaults.headers.common['Authorization'] = null;
    },
    async setDefaultColor(newColor) {
      this.color = newColor;
    
      // Safely retrieve and parse user data
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        try {
          const parsedUserData = JSON.parse(storedUserData);
          this.setUserData(parsedUserData);
        } catch (error) {
          console.error('Failed to parse user data from localStorage:', error);
        }
      } else {
        console.warn('No user data found in localStorage.');
      }
    
      if (this.userData && this.userData.email) {
        const apiPort = import.meta.env.VITE_API_PORT || 3000;
        const apiUrl = `http://localhost:${apiPort}/api/auth/update-color`;
    
        try {
          await axios.put(apiUrl, {
            email: this.userData.email,
            color: newColor,
          });
    
          // Update local userData
          this.userData.color = newColor;
          this.setUserData(this.userData);
        } catch (error) {
          console.error('Failed to update color:', error);
        }
      } else {
        console.error('User data is not available');
      }
    }
    
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    userColor: (state) => state.color,
  },
});
