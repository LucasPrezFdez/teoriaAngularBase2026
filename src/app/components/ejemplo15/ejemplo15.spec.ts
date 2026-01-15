import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo15 } from './ejemplo15';

describe('Ejemplo15', () => {
  let component: Ejemplo15;
  let fixture: ComponentFixture<Ejemplo15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
