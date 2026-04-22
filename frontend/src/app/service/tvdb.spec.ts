import { TestBed } from '@angular/core/testing';

import { Tvdb } from './tvdb';

describe('Tvdb', () => {
  let service: Tvdb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tvdb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
