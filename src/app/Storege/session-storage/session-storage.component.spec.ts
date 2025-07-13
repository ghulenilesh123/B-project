import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionStorageComponent } from './session-storage.component';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ import this

describe('SessionStorageComponent', () => {
  let component: SessionStorageComponent;
  let fixture: ComponentFixture<SessionStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionStorageComponent],
      imports: [ReactiveFormsModule], // ✅ add this
    }).compileComponents();

    fixture = TestBed.createComponent(SessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
