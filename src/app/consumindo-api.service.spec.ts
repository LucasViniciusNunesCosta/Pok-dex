import { TestBed } from '@angular/core/testing';

import { ConsumindoAPIService } from './consumindo-api.service';

describe('ConsumindoAPIService', () => {
  let service: ConsumindoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumindoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
