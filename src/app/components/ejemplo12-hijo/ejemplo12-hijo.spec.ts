import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12Hijo } from './ejemplo12-hijo';

describe('Ejemplo12Hijo', () => {
  let component: Ejemplo12Hijo;
  let fixture: ComponentFixture<Ejemplo12Hijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo12Hijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo12Hijo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
