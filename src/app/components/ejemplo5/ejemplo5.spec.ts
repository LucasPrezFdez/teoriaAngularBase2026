import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo5 } from './ejemplo5';

describe('Ejemplo5', () => {
  let component: Ejemplo5;
  let fixture: ComponentFixture<Ejemplo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
