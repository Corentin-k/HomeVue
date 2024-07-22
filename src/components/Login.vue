<template>
  <div class="container-login" v-if="!userStore.isLoggedIn">
    <h2>LOGIN</h2>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <router-link to="/signup">
      <button class="create-account">Create Account</button>
    </router-link>
    <button class="button-login" @click="login">Login</button>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
  <div v-else class="container-return">
    <h2>Already Logged In</h2>
    <router-link to="/home" class="return">
      <button class="button-home">Go to Home</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

export default defineComponent({
  name: 'Login',
  setup() {

      const username = ref('');
      const password = ref('');
      const error = ref('');
    const userStore = useUserStore();
      const router = useRouter();

    const login = async () => {
      try {
        await userStore.login({ email: username.value, password: password.value });
        router.push('/home');
      } catch (error) {
        console.error('Login error:', error);
      }
    };

      return {
        username,
        password,
        error,
        login,
        userStore,
      };
    },
  });

</script>

<!--



<template>
  <div class="container-login" v-if="!userStore.isLoggedIn">
    <h2>LOGIN</h2>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <index-link to="/signup">
      <button class="create-account">Create Account</button>
    </index-link>
    <button class="button-login" @click="login">Login</button>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
  <div v-if="userStore.isLoggedIn" class="container-return">
    <h2>Already Logged In</h2>
    <index-link to="/home" class="return">
      <button class="button-home">Go to Home</button>
    </index-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-index';
import { authenticate } from '@/services/usersService';
import { useUserStore } from '@/store/userStore';

export default defineComponent({
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const index = useRouter();
    const userStore = useUserStore();
    const error = ref('');

    const login = () => {
      const user = authenticate(username.value, password.value);
      if (user) {
        userStore.setLoggedIn(true);
        userStore.setDefaultColor(user.color);
        index.push('/home');
      } else {
        error.value = 'Invalid credentials';
        userStore.setLoggedIn(false);
      }
    };

    return {
      username,
      password,
      error,
      login,
      userStore,
    };
  },
});
</script>

-->
<style scoped>
.container-login,
.container-return {
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

input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #cccccc;
  border: none;
  border-radius: 5px;
  background-color: #1e1e1e;
  transition: background-color 0.3s;
}

.button-login,
.create-account,
.return {
  width: 100%;
  padding: 0.75rem;
  color: #121212;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  margin: 0.75rem 0;
  text-decoration: none;
}

.button-login {
  background-color: #bb86fc;
}

.create-account {
  background-color: #728b89;
}

.create-account:hover {
  background-color: #4f6d6a;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
