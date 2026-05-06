<script setup lang="ts">
import MonFooter from './components/Footer.vue'
</script>

<template>
  <div id="app">
      <MonFooter />
  </div>
</template>

// min-height: 100vh : le div prend toute la hauteur de l'écran
// flex-direction: column : les éléments s'empilent verticalement
<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>