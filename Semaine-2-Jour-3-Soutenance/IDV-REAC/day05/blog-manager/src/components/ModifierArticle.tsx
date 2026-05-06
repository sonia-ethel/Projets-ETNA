// ModifierArticle

import React, { useState } from 'react';

interface ModifierArticle {
    article: {
        id: number,
        title: string,
        category: string,
        content: string,
        author: string,
    };
    onSave: (id: number,
        title: string,
        category: string,
        content: string,
        author: string,
    ) => void;
    onCancel:() => void;
}

const ModifierArticle: React.FC<ModifierArticle>=({article, onSave, onCancel}) => {
    const [title, settitle] = useState(article.title);
    const [category, setCategory] = useState(article.category);
    const [content, setContent] = useState(article.content);
    const [author, setAuthor] = useState(article.author);

    const handsubmit=(e: React.ChangeEvent) => {
        e.preventDefault();
        if (title && category && content && author) {
            onSave(article.id, title, category, content, author);
        }
    };
    return(
        <form onSubmit={handsubmit}>
            <div>
                <label>Titre : </label>
                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
            </div>
            <div>
                <label>Contenu : </label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <div>
                <label>Catégorie : </label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div>
                <label>Auteur : </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button  type='button' onClick={onCancel}> Annuler</button>
            <button type='submit'> Sauvegarder</button>
        </form>
    );
}
export default ModifierArticle;