import { Component } from '@angular/core';
import { AjouterContact } from '../../components/ajouter-contact/ajouter-contact';
import { ListeContact } from '../../components/liste-contact/liste-contact';

@Component({
  selector: 'app-contacts',
  imports: [AjouterContact, ListeContact],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {}