/*Créez une fonction nommée convertMinutesInHours.
Elle doit prendre un paramètre minutes de type number.
La fonction doit afficher dans le terminal le nombre d'heures et de minutes correspondant.
La fonction ne renvoie rien.*/

function convertMinutesInHours(minutes: number): void {
    let heures = Math.floor(minutes / 60);
    let minutesRestantes = minutes % 60;
    console.log(`${heures} hours ${minutesRestantes} minutes`);
}

convertMinutesInHours(1643);

