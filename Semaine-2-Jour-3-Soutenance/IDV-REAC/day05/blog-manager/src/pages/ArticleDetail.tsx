// ArticleDetail

import { useParams } from 'react-router-dom'
import { useState } from 'react'


function ArticleDetail() {
  const { id } = useParams()
  const [articles] = useState([
    { id: 1, title: "Premier article", content: "Contenu...", category: "loisir", creationDate: "12 Mai 2025", author: "Sonia" }
  ])

  const article = articles.find(a => a.id === Number(id))

  if (!article) {
    return <p>Article non trouvé</p>
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Catégorie : {article.category}</p>
      <p>Date : {article.creationDate}</p>
      <p>Auteur : {article.author}</p>
    </div>
  )
}

export default ArticleDetail