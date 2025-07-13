import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterceptorComponent } from './interceptor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ import this
import { CompoServiceService } from '../all_service/service/compo-service.service'; 

describe('InterceptorComponent', () => {
  let component: InterceptorComponent;
  let fixture: ComponentFixture<InterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorComponent ],
      imports: [ HttpClientTestingModule ], // ✅ include this
      providers: [ CompoServiceService ] // ✅ make sure service is listed
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
