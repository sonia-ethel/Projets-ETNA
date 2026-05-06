import { useState } from 'react'
import { useMemo } from 'react'
//import './App.css'


/*
function App() {

const [ listeNombre, setlisteNombre ] = useState<number[]>([1,2,3,4,5,6,7,8,9])

// je vais additionner les nombre de maliste

let sommeListe = 0
for (let i = 0; i < listeNombre.length; i++) {
  sommeListe += listeNombre[i]
}


const ajouterNombre = () => {
  const nouveauNombre = Math.floor(Math.random() * 100 + 1)
  setlisteNombre([...listeNombre, nouveauNombre])
}

const resetListe = () => {
  setlisteNombre([1,2,3,4,5,6,7,8,9])
}
  return (
    <div>
      <h1>Liste des nombres</h1>
      <p>Nombres: [{listeNombre.join(', ')}]</p>
      <p>Somme de la liste: {sommeListe}</p>
      <button onClick={ajouterNombre}>Ajouter un nombre</button>
      <button onClick={resetListe}> Reset la liste</button>
  )

}*/



function App() {

// je vais faire le state pour la liste des nombres
const [ listeNombre, setlisteNombre ] = useState<number[]>([1,2,3,4,5,6,7,8,9])

// je vais faire le state pour le test

const [compteur, setCompteur] = useState<number>(0)

// je vais additionner les nombre de ma liste

let sommeListe = 0
for (let i = 0; i < listeNombre.length; i++) {
  sommeListe += listeNombre[i]
}

// je vais faire le calcul lent avec useMemo
const calculLent = useMemo(() => {
  console.log("Calcul lent")
  let resultat = 0
  for (let i = 0; i < 1000; i++) {
    resultat += i
  }
  return resultat + sommeListe
}, [listeNombre])

// je vais ajouter à ma liste
const ajouterNombre = () => {
  const nouveauNombre = Math.floor(Math.random() * 100 + 1)
  setlisteNombre([...listeNombre, nouveauNombre])
}

// je vais reset ma liste
const resetListe = () => {
  setlisteNombre([1,2,3,4,5,6,7,8,9])
}

return (
  <div>
    <h1>Liste des nombres</h1>
    <p>Nombres: [{listeNombre.join(', ')}]</p>
    <p>Somme de la liste: {sommeListe}</p>
    <p>Résultat calcul lent: {calculLent}</p>
    
    <button onClick={ajouterNombre}>Ajouter un nombre</button>
    <button onClick={resetListe}>Reset la liste</button>
    <p> </p>
    <hr />
    <h2>Test avec un autre state</h2>
    <p>Compteur : {compteur}</p>
    <button onClick={()=> setCompteur(compteur + 1)} >Incrémenter le compteur</button>

  </div>
)

}

export default App
