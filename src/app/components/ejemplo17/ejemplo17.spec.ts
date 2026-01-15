import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo17 } from './ejemplo17';

describe('Ejemplo17', () => {
  let component: Ejemplo17;
  let fixture: ComponentFixture<Ejemplo17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
