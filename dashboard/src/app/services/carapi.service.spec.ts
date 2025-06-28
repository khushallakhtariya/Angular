import { TestBed } from '@angular/core/testing';

import { CarapiService } from './carapi.service';

describe('CarapiService', () => {
  let service: CarapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
