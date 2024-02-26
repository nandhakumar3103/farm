import { TestBed } from '@angular/core/testing';

import { GrowersgoodsService } from './growersgoods.service';

describe('GrowersgoodsService', () => {
  let service: GrowersgoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowersgoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
