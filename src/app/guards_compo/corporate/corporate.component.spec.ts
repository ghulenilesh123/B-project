import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorporateComponent } from './corporate.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CorporateComponent', () => {
  let component: CorporateComponent;
  let fixture: ComponentFixture<CorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ testData: 'Resolved data' }) // ✅ Mock resolver data
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
