import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo11 } from './ejemplo11';

describe('Ejemplo11', () => {
  let component: Ejemplo11;
  let fixture: ComponentFixture<Ejemplo11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
