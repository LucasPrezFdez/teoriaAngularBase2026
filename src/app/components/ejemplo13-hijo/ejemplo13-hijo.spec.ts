import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13Hijo } from './ejemplo13-hijo';

describe('Ejemplo13Hijo', () => {
  let component: Ejemplo13Hijo;
  let fixture: ComponentFixture<Ejemplo13Hijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13Hijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13Hijo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
