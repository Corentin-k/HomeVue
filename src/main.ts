import { createApp } from 'vue';
import App from './App.vue';
import index from './router';
import { createPinia } from 'pinia'; // Importer createPinia depuis Pinia
import { useUserStore } from '@/store/userStore'; // Importer useUserStore depuis le fichier userStore.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCheck, faTint, faThermometerHalf, faSyncAlt, faXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Vue3Lottie from 'vue3-lottie'

library.add(faCheck, faXmark, faSyncAlt, faSpinner, faTint, faThermometerHalf);

const app = createApp(App);
const pinia = createPinia();
// Utiliser Pinia dans l'application
app.use(pinia);
app.use(Vue3Lottie)
// Enregistrer le composant FontAwesomeIcon globalement
app.component('font-awesome-icon', FontAwesomeIcon);

// Utiliser le index
app.use(index);

// Monter l'application
app.mount('#app');



const userStore = useUserStore();
const userData = localStorage.getItem('userData');
if (userData) {
  userStore.setUserData(JSON.parse(userData));
}
