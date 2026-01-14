import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13Padre } from './ejemplo13-padre';

describe('Ejemplo13Padre', () => {
  let component: Ejemplo13Padre;
  let fixture: ComponentFixture<Ejemplo13Padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13Padre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13Padre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
