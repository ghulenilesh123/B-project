import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompoAComponent } from './compo-a.component';
// import { CompoServiceService } from '../compo-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompoAComponent', () => {
  let component: CompoAComponent;
  let fixture: ComponentFixture<CompoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoAComponent],
      imports: [HttpClientTestingModule], // ✅ ADD THIS
      // providers: [CompoServiceService]    // Optional if already provided in service
    }).compileComponents();

    fixture = TestBed.createComponent(CompoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
