import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3b } from './ejemplo3b';

describe('Ejemplo3b', () => {
  let component: Ejemplo3b;
  let fixture: ComponentFixture<Ejemplo3b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo3b]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo3b);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
