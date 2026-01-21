import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20d } from './ejemplo20d';

describe('Ejemplo20d', () => {
  let component: Ejemplo20d;
  let fixture: ComponentFixture<Ejemplo20d>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20d]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20d);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
