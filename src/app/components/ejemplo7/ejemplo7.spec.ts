import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo7 } from './ejemplo7';

describe('Ejemplo7', () => {
  let component: Ejemplo7;
  let fixture: ComponentFixture<Ejemplo7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
