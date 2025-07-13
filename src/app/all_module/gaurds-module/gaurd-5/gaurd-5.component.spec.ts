import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gaurd5Component } from './gaurd-5.component';

describe('Gaurd5Component', () => {
  let component: Gaurd5Component;
  let fixture: ComponentFixture<Gaurd5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gaurd5Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Gaurd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm when ismydurty is true and user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.ismydurty = true;
    expect(component.CanDeactivate()).toBeTrue();
  });

  it('should cancel when ismydurty is true and user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.ismydurty = true;
    expect(component.CanDeactivate()).toBeFalse();
  });

  it('should return true when ismydurty is false', () => {
    component.ismydurty = false;
    expect(component.CanDeactivate()).toBeTrue();
  });
});
