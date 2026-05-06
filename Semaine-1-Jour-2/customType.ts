/*Créez un type personnalisé IDqui est du type numberou string.
Créez un type personnalisé EventTypequi peut avoir la valeur kickoff, workshop, followup, delivery, ou defense.
Créez une interface EtnaEventqui contient les propriétés suivantes :
idde type ID.
namede type string.
eventTypede type EventType.
Instanciez un nouvel objet constant etnaEventde type EtnaEventet assignez-lui les valeurs souhaitées.
Affichez le nouvel événement dans le terminal.
Exemple attendu dans le terminal (avec id: 12, name: "IDV-VUJS - day02 - ex08", et eventType: "followup") :

{ id: 12, name: 'IDV-VUJS - day02 - ex08', eventType: 'followup' }
Puis modifier la propriété idpour mettre un UUID (string)
Puis modifier la propriété eventTypepour mettre un 'atelier'
Affichez l'objet modifié dans le terminal.
Exemple attendu dans le terminal (avec id : "cfe5d908-5ba2-437e-bf54-e713eb6b2895", nom : "IDV-VUJS - day02 - ex08", et eventType : "workshop") :

{
  id: 'cfe5d908-5ba2-437e-bf54-e713eb6b2895',
  name: 'IDV-VUJS - day02 - ex08',
  eventType: 'workshop'
}
Ensuite, mettez la propriété idà true.
Et enfin, définit la propriété eventTypeà "meeting".
En compilant vous aurez les erreurs suivantes :

error TS2322: Type 'boolean' is not assignable to type 'ID'.
error TS2322: Type '"meeting"' is not assignable to type 'EventType'.
Ces erreurs s'affichent également dans votre IDE au survol des variables. */

