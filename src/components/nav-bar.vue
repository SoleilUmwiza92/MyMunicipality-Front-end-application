<template>
  <div class="my-class">
      <NavBarButtons/>

  </div>
</template>

<script>
import NavBarButtons from "@/components/nav-bar-buttons.vue";

export default {
  components: {NavBarButtons},
};
</script>

<style scoped>
.my-class {
  background-color: blue;
  color: white;
}
</style>