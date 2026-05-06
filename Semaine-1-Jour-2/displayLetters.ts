/*Créer une fonction displayLetters.
La fonction doit prendre un paramètre wordde type string.
Utilisez une boucle for...ofpour parcourir chaque caractère de la chaîne.
Afficher chaque lettre sur une ligne séparée dans le terminal.
La fonction ne renvoie rien.*/

function displayLetters (word: string): void{
    for (const elem of word ){
        console.log(elem);
    }
}


displayLetters("This is a loop... This is a loop...");