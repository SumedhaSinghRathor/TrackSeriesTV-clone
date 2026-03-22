import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpGrid } from './ep-grid';

describe('EpGrid', () => {
  let component: EpGrid;
  let fixture: ComponentFixture<EpGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(EpGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
