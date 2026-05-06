import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  getContacts(): Contact[] {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
  }

  saveContacts(contacts: Contact[]): void {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContact(contact: Contact): void {
    const contacts = this.getContacts();
    contacts.push(contact);
    this.saveContacts(contacts);
  }

  deleteContact(id: number): void {
    const contacts = this.getContacts().filter(c => c.id !== id);
    this.saveContacts(contacts);
  }
}