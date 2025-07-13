import { TestBed } from '@angular/core/testing';
import { GaurdsServiceService } from './gaurds-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GaurdsServiceService', () => {
  let service: GaurdsServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GaurdsServiceService]
    });
    service = TestBed.inject(GaurdsServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures no pending HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in and out correctly', () => {
    service.logout();
    expect(service.islogin()).toBeFalse();

    service.login();
    expect(service.islogin()).toBeTrue();
  });

  it('should return true if user has correct role', () => {
    expect(service.isuser('student')).toBeTrue();
    expect(service.isuser('admin')).toBeFalse();
  });

  it('should make a GET request to the correct URL', () => {
    service.get().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush([{ id: 1, title: 'Post 1' }]); // mock response
  });
});
