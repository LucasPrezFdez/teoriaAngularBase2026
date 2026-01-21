import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20c } from './ejemplo20c';

describe('Ejemplo20c', () => {
  let component: Ejemplo20c;
  let fixture: ComponentFixture<Ejemplo20c>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20c]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20c);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
