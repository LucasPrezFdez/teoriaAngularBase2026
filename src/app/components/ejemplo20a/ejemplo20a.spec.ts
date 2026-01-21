import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20a } from './ejemplo20a';

describe('Ejemplo20a', () => {
  let component: Ejemplo20a;
  let fixture: ComponentFixture<Ejemplo20a>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20a]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20a);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
