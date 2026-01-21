import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20i } from './ejemplo20i';

describe('Ejemplo20i', () => {
  let component: Ejemplo20i;
  let fixture: ComponentFixture<Ejemplo20i>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20i]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20i);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
