import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './components/contact-card/contact-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Code2Work CRM';
}
