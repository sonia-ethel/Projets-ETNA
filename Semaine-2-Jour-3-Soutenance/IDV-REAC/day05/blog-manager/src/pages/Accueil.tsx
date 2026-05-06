// mon Accueil

import { Link } from "react-router-dom"

function Accueil() {
  return (
    <div>
      <h1>Bienvenue sur mon blog</h1>
      <p>Vous pouvez :</p>
      <ul>
        <li>Créer un article</li>
        <li>Modifier un article</li>
        <li>Supprimer un article</li>
        <li>Filtrer les articles</li>
      </ul>
      <p>Nom du projet : Blog de Sonia-Ethel</p>
        <div>
            <Link to="/articles">Ecrire un article ?</Link>
        </div>
    </div>
  )
}
export default Accueil