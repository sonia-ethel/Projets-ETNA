import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContact } from './ajouter-contact';

describe('AjouterContact', () => {
  let component: AjouterContact;
  let fixture: ComponentFixture<AjouterContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterContact],
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
