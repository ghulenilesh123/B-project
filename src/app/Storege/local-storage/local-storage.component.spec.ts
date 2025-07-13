import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageComponent } from './local-storage.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LocalStorageComponent', () => {
  let component: LocalStorageComponent;
  let fixture: ComponentFixture<LocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalStorageComponent],
      imports: [ReactiveFormsModule], // ✅ Needed for formGroup to work
    }).compileComponents();

    fixture = TestBed.createComponent(LocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
