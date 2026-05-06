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

//ici je vais mettre du style
// margin-top: auto : le footer est poussé tout en bas automatiquement

<style scoped>
footer {
  text-align: center;
  width: 100%;
  padding: 100%;
  background-color: #39787F;
  color: white;
  margin-top: auto;
}
</style>