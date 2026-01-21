import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20e } from './ejemplo20e';

describe('Ejemplo20e', () => {
  let component: Ejemplo20e;
  let fixture: ComponentFixture<Ejemplo20e>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20e]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20e);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
