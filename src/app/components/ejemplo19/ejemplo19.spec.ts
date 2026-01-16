import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo19 } from './ejemplo19';

describe('Ejemplo19', () => {
  let component: Ejemplo19;
  let fixture: ComponentFixture<Ejemplo19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
