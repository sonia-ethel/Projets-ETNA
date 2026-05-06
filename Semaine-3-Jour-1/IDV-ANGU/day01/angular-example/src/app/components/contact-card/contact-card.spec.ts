import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactCard } from './contact-card';

// ceci est un fichier de test unitaire généré automatiquement par Angular CLI. 
// Il utilise Jasmine (le framework de test) et TestBed (l'utilitaire de test d'Angular).
// TestBed : simule un mini-module Angular pour tester le composant en isolation
// ComponentFixture : une "enveloppe" autour du composant qui donne accès à son HTML, ses propriétés, etc.

describe('ContactCard', () => {
  let component: ContactCard;
  let fixture: ComponentFixture<ContactCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
