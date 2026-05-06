// NouveauArticle

import React, {useState} from 'react';

interface ArticleFormProps {
    onAddArticle:  (
        title: string,
        category: string,
        content: string,
        author: string,
    ) => void;
} 
    const ArticleForm: React.FC<ArticleFormProps> = ({ onAddArticle}) => {
        const [title, setTitle] = useState('');
        const [category, setCategory] = useState('');
        const [content, setContent] = useState('');
        const [author, setAuthor] = useState('');
        const handsubmit = (e: React.SubmitEvent) => {
            e.preventDefault();
            if (title.trim() && 
                content.trim() &&
                category.trim() &&
                author.trim()) {
                    onAddArticle(title, category, content, author);
                setTitle('');
                setContent('');
                setCategory('');
                setAuthor(''); 
                }
        };
    return (
        <form onSubmit={handsubmit} className="article-form">
            <div className="form-group">
                <label htmlFor="title">Titre:</label>
                <input type='text' id='title' value={title} onChange={(e) =>
                    setTitle(e.target.value)
                } placeholder="Titre de l'article" required />
            </div>

            <div className="form-group">
                <label htmlFor="content">Contenu :</label>
                <textarea id="content" value={content} onChange={(e) => 
                    setContent(e.target.value)
                } placeholder="Contenu de l'article" required />
            </div>

            <div className="form-group">
                <label htmlFor="category">Categorie :</label>
                <textarea id="category" value={category} onChange={(e) => 
                    setCategory(e.target.value)
                } placeholder="Categorie de l'article" required />
            </div>

            <div className="form-group">
                <label htmlFor="author">Auteur :</label>
                <textarea id="author" value={author} onChange={(e) => 
                    setAuthor(e.target.value)
                } placeholder="Auteur de l'article" required />
            </div>
                <button type="submit" className="Submit-btn">Publier l'article !</button>
        </form>
    );
};

export default ArticleForm;