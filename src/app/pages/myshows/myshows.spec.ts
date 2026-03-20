import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myshows } from './myshows';

describe('Myshows', () => {
  let component: Myshows;
  let fixture: ComponentFixture<Myshows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myshows],
    }).compileComponents();

    fixture = TestBed.createComponent(Myshows);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
