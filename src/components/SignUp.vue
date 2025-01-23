<template>
  <div class="container-signup">
    <h2>SIGN UP</h2>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button class="button-signup" @click="signup">Sign Up</button>
    <p v-if="error" class="error-message">{{ error }}</p>
    <router-link to="/login">
      <button class="button-login">Already have an account? Login</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

export default defineComponent({
  name: 'Signup',
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const userStore = useUserStore();
    const router = useRouter();

    const signup = async () => {
      try {
        await userStore.register({ username: username.value, email: email.value, password: password.value });
        router.push('/login');
      } catch (err) {
        error.value = 'Signup failed';
        console.error('Signup error:', err);
      }
    };

    return {
      username,
      email,
      password,
      error,
      signup,
    };
  },
});
</script>


<style scoped>
.container-signup {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 2rem;
  max-width: 300px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
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

.button-registration, .button-login {
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
}

.button-registration {
  background-color: #bb86fc;
}

.button-registration:hover {
  background-color: #9969da;
}
.button-login {
  background-color: #03dac6;
}
.button-login:hover {
  background-color: #03b3a6;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
