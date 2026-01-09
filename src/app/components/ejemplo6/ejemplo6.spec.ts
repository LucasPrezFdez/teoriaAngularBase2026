import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo6 } from './ejemplo6';

describe('Ejemplo6', () => {
  let component: Ejemplo6;
  let fixture: ComponentFixture<Ejemplo6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
