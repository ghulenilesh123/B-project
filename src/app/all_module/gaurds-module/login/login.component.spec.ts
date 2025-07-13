import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { GaurdsServiceService } from 'src/app/all_service/service2/gaurds-service.service'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';  // ✅ Import this

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],       // ✅ Fix: mock HttpClient
      providers: [GaurdsServiceService]         // ✅ Ensure service is provided
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
