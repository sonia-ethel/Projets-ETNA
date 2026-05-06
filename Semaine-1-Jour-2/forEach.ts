/*Déclarez une interface Customeravec les propriétés suivantes :
firstname de type string(initialisé en minuscules)
lastname de type string(initialisé en minuscules)
phone de typestring
Initialisez un tableau nommé customers de type Customer[]
Affichez le tableau complet de chaque client avant modification.
Utilisez la méthode .forEach()pour modifier chaque objet en mettant une majuscule
à la première lettre du prénom ( victor-> Victor) et en remplaçant le nom de
famille tout en majuscule ( ménestrelus-> MÉNESTRELUS)
Affichez le tableau complet après modification pour démontrer
que les éléments ont été modifiés en place. */

interface Customer{
    firstname: string,
    lastname: string,
    phone: string,
}

const customers : Customer[] = [
    { firstname: 'victor', lastname: 'ménestrelus', phone: '123-456-7890' },
    { firstname: 'alice', lastname: 'dupont', phone: '987-654-3210' },
    { firstname: 'bob', lastname: 'martin', phone: '555-555-5555' },
    { firstname: 'charlie', lastname: 'brown', phone: '444-444-4444' }
];

function maj(): void {
    customers.forEach(customer =>{
        customer.lastname = customer.lastname.toUpperCase();
        let première_lettre = customer.firstname[0];
        let le_reste = customer.firstname.slice(1);
        customer.firstname = customer.firstname[0].toUpperCase() + le_reste;
    });

}

maj();
console.log(customers);