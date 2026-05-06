import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import type { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-liste-contact',
  imports: [NgFor, NgIf],
  templateUrl: './liste-contact.html',
  styleUrl: './liste-contact.css'
})
export class ListeContact implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  supprimer(id: number): void {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }
}