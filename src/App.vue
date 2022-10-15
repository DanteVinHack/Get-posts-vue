<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {NavBar}
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>