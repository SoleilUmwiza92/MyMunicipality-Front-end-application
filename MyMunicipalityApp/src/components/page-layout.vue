<template>
  <div class="page-layout">
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import PageFooter from "@/components/page-footer.vue";
export default {
  components: {
    PageFooter,
    NavBar,
  },
};
</script>