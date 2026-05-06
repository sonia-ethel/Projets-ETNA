// mon footer 
<template>
    <footer>© ETNA C2WK 2025</footer>
</template>

// ici je vais le rendre exportable
<script lang="ts">
import { defineComponent } from "vue";
	
export default defineComponent({
	name: "MonFooter",
	});

</script>
<style scoped>
footer {
  text-align: center;
  padding: 15px;
  height: 20px;
  background-color: #D7CCC8;
  color: black;
  margin-top: auto;
}
</style>