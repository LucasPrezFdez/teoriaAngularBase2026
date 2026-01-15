import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo14b } from './ejemplo14b';

describe('Ejemplo14b', () => {
  let component: Ejemplo14b;
  let fixture: ComponentFixture<Ejemplo14b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo14b]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo14b);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
