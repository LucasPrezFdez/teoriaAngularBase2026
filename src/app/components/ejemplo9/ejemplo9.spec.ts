import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo9 } from './ejemplo9';

describe('Ejemplo9', () => {
  let component: Ejemplo9;
  let fixture: ComponentFixture<Ejemplo9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
