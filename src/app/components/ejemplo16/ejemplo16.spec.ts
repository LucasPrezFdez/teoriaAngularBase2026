import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo16 } from './ejemplo16';

describe('Ejemplo16', () => {
  let component: Ejemplo16;
  let fixture: ComponentFixture<Ejemplo16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
