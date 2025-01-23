import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import Temperature from '@/components/Temperature.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import Allcomponents from '@/views/Allcomponents.vue';
import Settings from '@/components/Settings.vue';
import { useUserStore } from '@/store/userStore'; // Importer le store créé avec Pinia

const routes: Array<RouteRecordRaw> = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/color', name: 'ColorPicker', component: ColorPicker, meta: { requiresAuth: true } },
  { path: '/temperature', name: 'Temperature', component: Temperature, meta: { requiresAuth: true}},
  { path: '/allcomponents', name: 'Allcomponents', component: Allcomponents, meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: Settings, meta: { requiresAuth: true } },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

// Utilisation du store Pinia pour gérer l'état utilisateur
// Middleware de navigation pour vérifier l'authentification
index.beforeEach((to, from, next) => {
  const userStore = useUserStore(); // Utilisez le store Pinia pour l'utilisateur

  console.log('Navigating to:', to.path);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userStore.isLoggedIn) {
      next('/login'); // Redirigez vers la page de connexion si l'utilisateur n'est pas authentifié
    } else {
      const loggedInUserJSON = localStorage.getItem('loggedInUser');
      const role = loggedInUserJSON ? JSON.parse(loggedInUserJSON).role : '';
    
      if (to.meta.requiresRole && role !== to.meta.requiresRole) {
        next(from.path); // Redirigez vers la page précédente si l'utilisateur n'a pas le rôle requis
      } else {
        next(); // Autorisez l'accès à la route
      }
    }
  } else {
    next(); // Autorisez l'accès aux routes publiques
  }
});

export default index;