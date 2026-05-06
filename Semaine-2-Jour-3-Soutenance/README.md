# Groupe de montch_e 1075215

## Name
blog-manager


## Description
Ce projet est un mini-blog personnel pour les étudiants et jeunes professionnels souhaitant partager leurs apprentissages, expériences et projets.



## Technologies
# Ressources
https://www.pandacodeur.com/pages/projets-informatique/tp-reactjs/react-blog-course.html
https://eslint.org/
https://prettier.io/
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://www.typescriptlang.org/docs/
https://reactrouter.com/
https://react.dev/learn
https://codelynx.dev/posts/comment-utiliser-use-state-react
https://ag-grid.com/react-data-grid/getting-started/
https://reactnativeelements.com/docs/2.3.2/header


# Installation du projet
npm create vite@latest blog-manager -- --template react-ts
npm install


## Prettier
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
// créer un fichier .prettierrc à la racine du projet
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}

## ESlint
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
// créer un fichier .eslintrc.json à l aracine du projat
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ]
}

# run du projet
npm run dev 

# Author
 montch_e