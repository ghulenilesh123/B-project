import { TestBed } from '@angular/core/testing';

import { SingalserviceService } from './singalservice.service';

describe('SingalserviceService', () => {
  let service: SingalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
