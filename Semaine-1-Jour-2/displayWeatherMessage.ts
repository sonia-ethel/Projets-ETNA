/*Créez un enum nommé Weather contenant les valeurs suivantes :
Ensoleillé
Pluvieux
Nuageux
Neigeux
Orageux
Venteux
Créer une fonction displayWeatherMessagequi prend un paramètre weatherde type Weather.
Dans la fonction, utilisez une instruction switch pour afficher un message différent selon la valeur de météo :
Pour Sunny : « C'est une journée radieuse et ensoleillée ! ☀️ »
Pour Rainy : « N'oubliez pas votre parapluie ! ☔️ »
Pour Cloudy : « On dirait qu'il pourrait pleuvoir plus tard. ☁️ »
Pour Snowy : « C'est l'heure de la bataille de boules de neige ! ❄️ »
Pour Stormy : « Restez à l'intérieur, c'est dangereux dehors ! ⛈️ »
Pour Windy : « Accrochez-vous à votre chapeau ! 💨 »
Dans le cas par défaut : "Condition météo inconnue."
Testez la fonction avec plusieurs valeurs de l'énumération. */

enum Weather {
    Ensoleillé = 1,
    Pluvieux,
    Nuageux,
    Neigeux,
    Orageux,
    Venteux,
}


function displayWeatherMessage(weather: Weather): void{
    switch (weather) {
        case Weather.Ensoleillé:
            console.log("C'est une journée radieuse et ensoleillée ! ☀️");
            break;
        case Weather.Pluvieux:
            console.log("N'oubliez pas votre parapluie ! ☔️");
            break;
        case Weather.Nuageux:
            console.log("On dirait qu'il pourrait pleuvoir plus tard. ☁️");
            break;
        case Weather.Neigeux:
            console.log("C'est l'heure de la bataille de boules de neige ! ❄️")
            break;
        case Weather.Orageux:
            console.log("Restez à l'intérieur, c'est dangereux dehors ! ⛈️")
            break;
        case Weather.Venteux:
            console.log("Accrochez-vous à votre chapeau ! 💨")
            break;
        default:
            console.log(`Sorry, we are out of ${weather}.`);

    }
}

displayWeatherMessage(Weather.Neigeux)
displayWeatherMessage(Weather.Ensoleillé)
displayWeatherMessage(Weather.Venteux)
displayWeatherMessage(Weather.Nuageux)
displayWeatherMessage(Weather.Pluvieux)
displayWeatherMessage(Weather.Orageux)