import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo14 } from './ejemplo14';

describe('Ejemplo14', () => {
  let component: Ejemplo14;
  let fixture: ComponentFixture<Ejemplo14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
