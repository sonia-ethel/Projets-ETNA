// ArticlesCard
import React, { useState } from "react";
import ModifierArticle from "./ModifierArticle";

// ici je vais mettre mon dossier qui affiche les articles
interface ArticleProps {
  id: number,
  title: string,
  category: string,
  content: string,
  creationDate: string,
  author: string,
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string, category: string, content: string, author: string) => void;
}

const ArticlesCard: React.FC<ArticleProps> = ({id, title, category, content, creationDate, author, onDelete, onUpdate}) => {
    const [showModal, setshowModal] = useState(false);
    const handleSave = (id: number, title: string, category: string, content: string, author: string) => {
        onUpdate(id, title, category, content, author);
        setshowModal(false);
    };
    return (<div className="article">
        <h2 className="article-title">{title}</h2>
        <p className="article-content">{content}</p>
        <p className="article-category"> {category}</p>
        <p className="article-creationDate">{creationDate}</p>
        <p className="article-author">{author}</p>
        <button onClick={() =>{
            if (window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
                onDelete(id);
        }}}>Supprimer</button>
        <button onClick={() =>
            setshowModal(true)
        }>Modifier</button>
        {showModal && (
            <ModifierArticle
            article={{id, title, category, content, author}}
            onSave={handleSave}
            onCancel={() => setshowModal(false)}/>
        )}
    </div>);
};

export default ArticlesCard;