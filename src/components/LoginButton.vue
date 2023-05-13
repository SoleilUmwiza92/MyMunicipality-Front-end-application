<template>
  <button class="button" @click="handleLogin">Log In</button>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile",
        },
      });
    },
  },
};
</script>