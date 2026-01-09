import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4 } from './ejemplo4';

describe('Ejemplo4', () => {
  let component: Ejemplo4;
  let fixture: ComponentFixture<Ejemplo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
