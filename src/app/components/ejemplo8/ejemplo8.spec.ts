import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo8 } from './ejemplo8';

describe('Ejemplo8', () => {
  let component: Ejemplo8;
  let fixture: ComponentFixture<Ejemplo8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
