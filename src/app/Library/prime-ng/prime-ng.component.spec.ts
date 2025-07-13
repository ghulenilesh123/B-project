import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeNGComponent } from './prime-ng.component';
import { ButtonModule } from 'primeng/button'; // ✅ PrimeNG button module

describe('PrimeNGComponent', () => {
  let component: PrimeNGComponent;
  let fixture: ComponentFixture<PrimeNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeNGComponent],
      imports: [ButtonModule] // ✅ Needed for <p-button>
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });
});
