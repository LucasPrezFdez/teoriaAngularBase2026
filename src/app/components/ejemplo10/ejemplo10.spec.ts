import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo10 } from './ejemplo10';

describe('Ejemplo10', () => {
  let component: Ejemplo10;
  let fixture: ComponentFixture<Ejemplo10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
