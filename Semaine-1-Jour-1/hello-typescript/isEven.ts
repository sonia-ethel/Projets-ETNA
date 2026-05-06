/*Créez une fonction nommée isEven.
Cette fonction doit prendre un paramètre n de type number.
Elle doit renvoyer true si le nombre est pair, et false sinon.
Veillez à bien typer le retour de la fonction*/

function isEven(n: number): boolean {
    if (n % 2 == 0){
        return true;
    }
    return false;
}