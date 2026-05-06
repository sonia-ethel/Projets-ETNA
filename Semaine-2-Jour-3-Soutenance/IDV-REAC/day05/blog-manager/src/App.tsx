// mon app

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MonHeader from './components/Header'
import MonFooter from './components/Footer'
import Accueil from './pages/Accueil'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'

function App() {
  return (
    <BrowserRouter>
      <MonHeader />
        <div className="maPage">
          <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
      <MonFooter />
    </BrowserRouter>
  )
}

export default App