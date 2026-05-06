// je vais utiiliser API Option

<script lang="ts">
import MonFooter from './components/Footer.vue';
import MonHeader from './components/Header.vue';
import MaListe from './components/MaListe.vue';

export default {
  components: {
    MonFooter,
    MonHeader,
    MaListe,
  },
  data () {
    return {
      message: "tapez une tâche et mettez entrer"
    };
  }
};
</script>

<template>
    <div id="app">
      <MonHeader />
      <main>
        <MaListe />
      </main>
      
      <MonFooter />
    </div>


</template>



<style>
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>