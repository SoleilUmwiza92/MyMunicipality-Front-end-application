<template>
  <div class="nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <LoginButton /> <br><br>
      <SignupButton /> <br>
    </template>
    <template v-if="isAuthenticated">
      <LogoutButton />
    </template>
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import LogoutButton from "@/components/LogoutButton.vue";
import SignupButton from "@/components/SignupButton.vue";

export default {
  components: { LoginButton, LogoutButton, SignupButton },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>

