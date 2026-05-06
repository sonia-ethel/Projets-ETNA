// Définissez une interface User.
interface User {
    firstname: string,
    lastname: string,
    age: number,
    email: string,
    isActive: boolean
}

interface Marie extends User {
}

const Marie: User = {
    firstname: "Marie",
    lastname: "Curie",
    age: 157,
    email: "marie.curie@etna.io",
    isActive: false
};

// Déclarez un nouvel objet user en précisant qu'il est de type User

let user: User;

/*Créez une fonction displayFullName qui prend en
paramètre un objet de type User.*/

function displayFullName(user: User) {
    return `${user.firstname} ${user.lastname}`
}

// Affichez l'objet complet dans le terminal.
console.log(Marie);

// afficher Marie Curie
console.log(displayFullName(Marie))
