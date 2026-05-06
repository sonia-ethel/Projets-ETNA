import { Link } from 'react-router-dom'
import '../App.css'

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Articles">Ecrire un article</Link>
      </nav>
    </header>
  )
}

export default Header