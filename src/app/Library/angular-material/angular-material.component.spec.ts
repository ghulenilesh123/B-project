import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialComponent } from './angular-material.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Add this if you use matInput
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AngularMaterialComponent', () => {
  let component: AngularMaterialComponent;
  let fixture: ComponentFixture<AngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule // Required for Angular Material animations
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

