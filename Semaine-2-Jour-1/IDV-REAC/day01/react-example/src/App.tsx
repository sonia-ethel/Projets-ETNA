import './App.css'
import {useState} from 'react'

function App() {
const projectName = "Code2Work Dashboard";
const currentYear = new Date().getFullYear();
const name = "Sonia-Ethel";
const date = new Date().toLocaleDateString('fr-FR');
const NombreNotification = 5;

const [tachesCompletes, setTachesCompletes] = useState<number>(0);
const incrementer = () => {
  setTachesCompletes(tachesCompletes + 1);
}

const [nomUtilisateur, setnomUtilisateur] = useState<string>("");


let connexion: boolean = true;
let message;
if (connexion === true) {
  message = <p>Bienvenue {nomUtilisateur}</p>
} else {
  message = <p>Veuillez vous connecter {nomUtilisateur}</p>
}

interface Project {
  id: number;
  title: string;
  auteur: string;
  statut: string;

}
const MonTableau: Project[] = [
  { id: 1, title: 'projet alpha', auteur: 'Sonia', statut: 'fini'},
  { id: 2, title: 'projet lambda', auteur: "Ethel", statut: 'en cours'},
  { id: 3, title: 'Projet Beta', auteur: 'Karim', statut: 'En attente' },
  { id: 4, title: 'Projet Gamma', auteur: 'Léa', statut: 'En cours' },
];

return (
  <div>
    <h1>Welcome to {projectName}</h1>
    <p>React app successfully running in {currentYear} 🎉</p>
    <p>Bonjour {nomUtilisateur || " ..."}!</p>
    <p>Aujourd'hui c'est {date}.</p>
    <p>Tu as {NombreNotification} notifications!</p>
    {message}
    <p>Nom de l'utilisateur: {nomUtilisateur || " ..."}</p>
    <p>Tâches complétées: {tachesCompletes}</p>
    <p></p>
    <div>
      <input 
        value={nomUtilisateur}
        onChange={(e) => setnomUtilisateur(e.target.value)}
        onKeyUp={(e) => e.key === "Enter"}
        placeholder="Changer le nom..." 
        />
    </div>
    <p></p>
    <button onClick={incrementer}> Marquer une tâche comme complétée</button>
    <p></p>
    <div >
      <table className="maclasse">
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Statut</th>
        </tr>
          {MonTableau.map((projet)=> (
          <tr key={projet.id}>
            <td>{projet.title}</td>
            <td>{projet.auteur}</td>
            <td>{projet.statut}</td>
          </tr>
        ))}        
      </table>
    </div>
  </div>
);
}

export default App