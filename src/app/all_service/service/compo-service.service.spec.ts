
import { TestBed } from '@angular/core/testing';
import { CompoServiceService } from './compo-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Required

describe('CompoServiceService', () => {
  let service: CompoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Fixes NullInjectorError
      providers: [CompoServiceService]
    });
    service = TestBed.inject(CompoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more test cases here
});
