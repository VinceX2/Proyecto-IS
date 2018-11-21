import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearTicketComponent } from './form-crear-ticket.component';

describe('FormCrearTicketComponent', () => {
  let component: FormCrearTicketComponent;
  let fixture: ComponentFixture<FormCrearTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCrearTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
