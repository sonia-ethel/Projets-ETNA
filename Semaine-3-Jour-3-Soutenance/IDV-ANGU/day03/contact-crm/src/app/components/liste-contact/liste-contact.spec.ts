import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeContact } from './liste-contact';

describe('ListeContact', () => {
  let component: ListeContact;
  let fixture: ComponentFixture<ListeContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeContact],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
