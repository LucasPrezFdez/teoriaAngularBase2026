import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20g } from './ejemplo20g';

describe('Ejemplo20g', () => {
  let component: Ejemplo20g;
  let fixture: ComponentFixture<Ejemplo20g>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20g]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20g);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
