/*définir une interface Moduleavec les propriétés suivantes :
idde typenumber
namede typestring
creditsde typenumber
Déclarer un objet modulede type Moduleen paramètre.
Créer une fonction nommée displayKeys.
Utilisez une boucle for...inpour parcourir les clés de l'objet.
Afficher chaque clé de l'objet sur une ligne séparée dans le terminal.
La fonction ne renvoie rien. */


// interface
interface Module{
    id: number,
    name: string,
    credits: number,
}

//objet
const module: Module = {
    id: 1234566,
    name: "sonia",
    credits: 65,
}

function displayKeys(module: Module): void{
    for ( const elem in module){
        console.log(elem);
    }
}

displayKeys(module);