import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20h } from './ejemplo20h';

describe('Ejemplo20h', () => {
  let component: Ejemplo20h;
  let fixture: ComponentFixture<Ejemplo20h>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20h]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20h);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
