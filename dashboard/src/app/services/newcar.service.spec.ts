import { TestBed } from '@angular/core/testing';

import { NewcarService } from './newcar.service';

describe('NewcarService', () => {
  let service: NewcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
