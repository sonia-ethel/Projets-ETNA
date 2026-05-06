import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.html',
  styleUrls: ['./contact-card.css']
})
export class ContactCardComponent {
  name: string = 'Sonia-Ethel Montchon';
  role: string = 'Développeuse Frontend';
  email: string = 'sonia.montchon@code2work.fr';
}