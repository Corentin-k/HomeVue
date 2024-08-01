import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTint, faThermometerHalf, faSyncAlt, faXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Vue3Lottie from 'vue3-lottie';
// @ts-ignore
import i18n from './i18n.js';
import * as jwt_decode from 'jwt-decode';


import { useUserStore } from '@/store/userStore'

import { getDHT11Data } from '@/services/esp32Service';

// Ajoutez les icônes FontAwesome à la bibliothèque
library.add(faCheck, faXmark, faSyncAlt, faSpinner, faTint, faThermometerHalf);

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Vue3Lottie);
// @ts-ignore
app.use(VueChartkick);
app.use(router);
app.use(i18n);
// Enregistrer le composant FontAwesomeIcon globalement
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');



setInterval(async () => {
  if(!userStore.token) {
  try {
    await getDHT11Data();
  } catch (error) {
    console.error('Error fetching DHT11 data:', error);
  }}
}, 60000);


const userStore = useUserStore();
const userData = localStorage.getItem('userData');
if (userData) {
  userStore.setUserData(JSON.parse(userData));
}

// Fonction pour vérifier si le token est expiré

/***
function isTokenExpired(token: string): boolean {
  try {
    // @ts-ignore
    const decoded: any = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
}


// Vérifie la validité du token toutes les minutes
setInterval(() => {
  const token = userStore.token;
  if (token && isTokenExpired(token)) {
    alert('Your session has expired. Please log in again.');
    userStore.logout();
    router.push('/login');
  }
}, 60000); // 1 minute*/