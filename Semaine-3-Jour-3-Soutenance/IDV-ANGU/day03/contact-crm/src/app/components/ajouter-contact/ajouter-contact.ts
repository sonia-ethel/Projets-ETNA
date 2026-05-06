import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-ajouter-contact',
  imports: [ FormsModule ],
  templateUrl: './ajouter-contact.html',
  styleUrl: './ajouter-contact.css',
})
export class AjouterContact {
firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  constructor(private contactService: ContactService) {}

  ajouter(): void {
    const contact = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      favorite: false
    };
    this.contactService.addContact(contact);
  
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }
}
