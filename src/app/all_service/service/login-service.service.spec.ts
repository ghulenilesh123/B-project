import { TestBed } from '@angular/core/testing';
import { LoginServiceService } from './login-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginServiceService', () => {
  let service: LoginServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginServiceService]
    });

    service = TestBed.inject(LoginServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false initially for isLoggedIn', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should login and logout correctly', () => {
    service.login();
    expect(service.isLoggedIn()).toBeTrue();

    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should return true if user has matching role', () => {
    expect(service.userdata('student')).toBeTrue();
  });

  it('should return false if user role does not match', () => {
    expect(service.userdata('admin')).toBeFalse();
  });

  it('should make a GET request to the expected URL in getresolver()', () => {
    service.getresolver().subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush([{ id: 1, title: 'Sample Post' }]); // mock response
  });
});
