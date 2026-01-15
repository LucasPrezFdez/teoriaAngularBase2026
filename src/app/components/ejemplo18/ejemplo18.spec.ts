import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo18 } from './ejemplo18';

describe('Ejemplo18', () => {
  let component: Ejemplo18;
  let fixture: ComponentFixture<Ejemplo18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
