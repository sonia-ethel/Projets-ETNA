/*Créer une fonction nommée displayNumbers.
Utiliser une boucle for.
Afficher les nombres de 1 à 10 dans le terminal.
La fonction ne retourne rien.*/

function displayNumbers(n: number): void{
    for (let i = 1; i < n; i++){
        console.log(i);
    }
}

displayNumbers(10) 