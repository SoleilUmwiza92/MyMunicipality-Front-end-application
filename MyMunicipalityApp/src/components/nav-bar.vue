<template>
  <div className="nav-bar__container">
    <nav className="nav-bar">
      <NavBarButtons/>
    </nav>
  </div>
</template>

<script>
import NavBarButtons from "@/components/nav-bar-buttons.vue";

export default {
  components: {NavBarButtons},
};
</script>