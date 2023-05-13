<template>
  <div class="page-layout">
    <NavBar />
    <div class="page-layout__content">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>