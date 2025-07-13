import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorInsuranceComponent } from './motor-insurance.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import this

describe('MotorInsuranceComponent', () => {
  let component: MotorInsuranceComponent;
  let fixture: ComponentFixture<MotorInsuranceComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [MotorInsuranceComponent],
      imports: [FormsModule], // ✅ Add FormsModule to support ngModel
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MotorInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate with correct URL in getdata()', () => {
    component.input = 'car123';
    component.getdata();
    expect(mockRouter.navigateByUrl)
      .toHaveBeenCalledWith('car/car123?name=rahul&&lname=ghule');
  });

  it('should confirm deactivation when form is dirty and user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.formisdurty = true;
    const result = component.canDeactivate();
    expect(result).toBeTrue();
  });

  it('should cancel deactivation when form is dirty and user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.formisdurty = true;
    const result = component.canDeactivate();
    expect(result).toBeFalse();
  });

  it('should allow deactivation when form is not dirty', () => {
    component.formisdurty = false;
    const result = component.canDeactivate();
    expect(result).toBeTrue();
  });
});
