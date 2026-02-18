import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thenew } from './thenew';

describe('Thenew', () => {
  let component: Thenew;
  let fixture: ComponentFixture<Thenew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thenew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thenew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
