import { TestBed } from '@angular/core/testing';

import { DataCollectionService } from './data-collection.service';

describe('DataCollectionService', () => {
  let service: DataCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
