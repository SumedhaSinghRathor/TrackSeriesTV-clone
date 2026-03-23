import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpList } from './ep-list';

describe('EpList', () => {
  let component: EpList;
  let fixture: ComponentFixture<EpList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpList],
    }).compileComponents();

    fixture = TestBed.createComponent(EpList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
