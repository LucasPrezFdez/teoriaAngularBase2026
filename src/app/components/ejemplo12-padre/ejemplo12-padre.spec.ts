import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12Padre } from './ejemplo12-padre';

describe('Ejemplo12Padre', () => {
  let component: Ejemplo12Padre;
  let fixture: ComponentFixture<Ejemplo12Padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo12Padre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo12Padre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
