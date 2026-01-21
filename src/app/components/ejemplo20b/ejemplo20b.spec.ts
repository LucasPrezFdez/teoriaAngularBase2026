import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20b } from './ejemplo20b';

describe('Ejemplo20b', () => {
  let component: Ejemplo20b;
  let fixture: ComponentFixture<Ejemplo20b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20b]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20b);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
