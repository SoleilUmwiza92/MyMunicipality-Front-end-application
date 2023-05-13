<template>
  <div class="my-class">
    <nav-bar>
      <NavBarButtons/>
    </nav-bar>
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