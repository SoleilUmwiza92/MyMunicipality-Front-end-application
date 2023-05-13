<template>
  <div class=" my-class page-layout">
    <NavBar />
    <div class="page-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav-bar.vue";
</script>


<style scoped>
.my-class {
  background-color: blue;
  color: white;
}
</style>