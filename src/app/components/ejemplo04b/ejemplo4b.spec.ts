import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4b } from './ejemplo4b';

describe('Ejemplo4b', () => {
  let component: Ejemplo4b;
  let fixture: ComponentFixture<Ejemplo4b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo4b]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4b);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
