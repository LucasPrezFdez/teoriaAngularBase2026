import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20f } from './ejemplo20f';

describe('Ejemplo20f', () => {
  let component: Ejemplo20f;
  let fixture: ComponentFixture<Ejemplo20f>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20f]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20f);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
