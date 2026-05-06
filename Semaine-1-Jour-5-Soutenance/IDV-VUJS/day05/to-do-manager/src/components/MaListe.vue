// MaListe
<template>
    <div class="contenu-de-ma-liste">
        <div class="entête">
            <h2>Ma liste</h2>
            <p>Ajoutez vos tâches dans la liste !</p>
            <input v-model="NouvelleTache" placeholder="Nouvelle tâche ..." @keyup.enter="AjouterTache"/>
            <button @click="AjouterTache">Ajouter</button>
            <ul>
                <li v-for="(tache, index) in taches" :key="index">
                    <div>
                        <input type="checkbox" v-model="tache.fini" @change="FinirTache(tache)"/>
                        <span v-if="!tache.isModifier" :class="{'tache-fini': tache.fini}">{{ tache.text }}</span>
                        <input v-else v-model="tache.text" @keyup.enter="EnregistrerTache(tache)" @blur="EnregistrerTache(tache)" />
                    </div>
                    <button v-if="!tache.isModifier" @click="ModifierTache(tache)" style="margin-left: auto;">Modifier</button>
                    <button @click="SupprimerTache(index)">Supprimer</button>
                </li>
            </ul>
        </div>
    </div>
</template>

// ici je vais le rendre exportable
<script lang="ts">
import { defineComponent } from "vue";
	
export default defineComponent({
	name: "MaListe",
    data() {
        return {
            NouvelleTache: '',
            taches: [] as any[]
        };
    },
    mounted() {
    this.taches = JSON.parse(localStorage.getItem('taches') || '[]');
},
    methods: {
        AjouterTache() {
            if (this.NouvelleTache.trim() !== '') {
                this.taches.push({
                    text: this.NouvelleTache,
                    fini: false, 
                    isModifier: false});
                this.NouvelleTache = '';
                localStorage.setItem('taches', JSON.stringify(this.taches));
            }
        },
        SupprimerTache(index: number) {
            this.taches.splice(index, 1);
            localStorage.setItem('taches', JSON.stringify(this.taches));
        },
        ModifierTache(tache: any) {
            tache.isModifier = true;
            localStorage.setItem('taches', JSON.stringify(this.taches));
        },
        EnregistrerTache(tache: any) {
            tache.isModifier = false;
            localStorage.setItem('taches', JSON.stringify(this.taches));
        },
        FinirTache(tache: any) {
            tache.fini = true;
            localStorage.setItem('taches', JSON.stringify(this.taches));
        },
    },
});

</script>
<style scoped>
.contenu-de-ma-liste {

  background-color: #EFEBE9;
  border: 5px solid #D7CCC8;
  color: #333;

  padding: 40px;
  margin: 50px auto;
  max-width: 600px;
  min-height: 400px;
  border-radius: 20px;

  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

}

h2 {
    color: #5D4037;
    margin-bottom: 20px;
    font-size: 1.8rem;
    border-bottom: 2px solid #D7CCC8;
    display: inline-block;
    padding-bottom: 5px;
}

.tache-fini {
    text-decoration: line-through;
    color: gray;
}

input {
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid #5D4037;
    border-radius: 5px;
    justify-content: left;
}

button {
    margin-left: 5px;
    padding: 5px;
    border: 2px solid #5D4037;
    border-radius: 5px;
    background-color: #5D4037;
    color: white;
    justify-content: right;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
}
</style>