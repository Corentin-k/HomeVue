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
        const { data } = await axios.post('http://localhost:3000/api/auth/register', credentials);
        this.setUserData(data);
      } catch (error) {
        throw new Error('Registration failed');
      }
    },
    async login(credentials) {
      try {
        const { data } = await axios.post('http://localhost:3000/api/auth/login', credentials);
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
      console.log(userData)
      this.color = userData.color || '#bb86fc'; // Assigner la couleur ou utiliser la couleur par défaut
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
      const userData = this.userData;

      if (userData && userData.username) {
        try {
          await axios.put('http://localhost:3000/api/auth/update-color', {
            username: userData.username,
            color: newColor
          });

          // Mise à jour locale des données utilisateur après la mise à jour de la couleur
          userData.color = newColor;
          this.setUserData(userData);
        } catch (error) {
          console.error('Failed to update color:', error);
        }
      } else {
        console.error('User data is not available or does not contain username');
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    userColor: (state) => state.color,
  },
});
