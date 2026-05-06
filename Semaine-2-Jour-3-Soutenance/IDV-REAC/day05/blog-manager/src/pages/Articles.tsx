// mes Articles

import { useEffect, useState } from "react";
import ArticlesCard from "../components/ArticlesCard";
import ArticleForm from "./NouveauArticle";

// ici je vais stocké mes articles
function Articles () {

  const [article, setArticles] = useState<any[]>(() => {
    const sauvergarder = localStorage.getItem("articles");
    if(sauvergarder) {
      return JSON.parse(sauvergarder);
    }
    return [
      {id: 1, title: "Comment publier un article", content: "Pour publier un article, veuillez remplir tous les champs, et appuyez sur: Publier l'article.", category: "Renseignement", creationDate: "12 Avril 2026", author: "Sonia-Ethel"}
    ]
  })
    useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(article));
  }, [article]);
  const addArticle = (
      title: string,
      category: string,
      content: string,
      author: string,
  )=> {
    const NouvelArticle = {
      id: Date.now(),
      title,
      content,
      category,
      creationDate: new Date().toLocaleDateString(),
      author,
    };
    setArticles([...article, NouvelArticle]);
  };

  const SupprimerArticle = (id: number) => {
    setArticles(article.filter((article) => article.id !== id));
  };
  const ModifierArticle = (id: number, title: string, category: string, content: string, author: string) => {
    setArticles(article.map(a =>
      a.id === id ? {
        ...a, id, title, category, content, author
      }: a
    ))
  }
  const [filtrerNom, setFiltrerNom] = useState("");
  const [trierDate, setTrierDate] = useState("Recent");
  return (
    <div className="App">
      <h1>Bienvenue sur mon blog</h1>
      <div>
        <input type="text" 
        placeholder="trier par nom"
        value={filtrerNom}
        onChange={(e) => setFiltrerNom(e.target.value)}>
        </input>
          <select value={trierDate} onChange={(e) => setTrierDate(e.target.value)}>
            <option value="recent"> Plus récent </option>
            <option value="ancien"> Plus ancien </option>
          </select>
      </div>
      <div className="maPage">
        <div className="articles-liste">
            <ArticleForm onAddArticle={addArticle} />
        </div>
            <div> {article
            .filter(a => a.title.toLowerCase().includes(filtrerNom.toLowerCase()))
            .sort((a, b) => {
              if (trierDate ==="recent") {
                return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
              } else {
                return new Date(a.creationDate).getTime() -new Date(b.creationDate).getTime();
              }
            })
            .map((article) => (
                <ArticlesCard key={article.id}
                id = {article.id}
                title={article.title}
                content={article.content}
                category={article.category}
                creationDate={article.creationDate}
                author={article.author}
                onDelete={SupprimerArticle}
                onUpdate={ModifierArticle} />))}
            </div>
        </div>
    </div>

  );
}

export default Articles;