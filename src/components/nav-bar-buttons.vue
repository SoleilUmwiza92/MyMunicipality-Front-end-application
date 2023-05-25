<template>
  <div class="nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <LoginButton /> <br><br>
      <SignupButton /> <br>
    </template>
    <template v-if="isAuthenticated">
      <LogoutButton /><br>
      <DocumentResults/> <br>
    </template>
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import LogoutButton from "@/components/LogoutButton.vue";
import SignupButton from "@/components/SignupButton.vue";
import DocumentResults from "@/components/DocumentResults.vue";

export default {
  components: { LoginButton, LogoutButton, SignupButton, DocumentResults },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>

