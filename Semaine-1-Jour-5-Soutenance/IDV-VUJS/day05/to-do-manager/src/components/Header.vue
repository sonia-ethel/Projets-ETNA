// mon header 
<template>
    <header>Bienvenue sur Ma-To-Do-Liste</header>
</template>

// ici je vais le rendre exportable
<script lang="ts">
import { defineComponent } from "vue";
	
export default defineComponent({
	name: "MonHeader",
	});

</script>
<style scoped>
header {
  text-align: center;
  padding: 15px;
  background-color: #5D4037;
  color: white;
  margin-top: auto;
}
</style>