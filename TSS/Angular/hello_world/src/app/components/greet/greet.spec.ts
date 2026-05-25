import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greet } from './greet';

describe('Greet', () => {
  let component: Greet;
  let fixture: ComponentFixture<Greet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greet],
    }).compileComponents();

    fixture = TestBed.createComponent(Greet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
