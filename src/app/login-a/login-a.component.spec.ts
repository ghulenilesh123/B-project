import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAComponent } from './login-a.component';

describe('LoginAComponent', () => {
  let component: LoginAComponent;
  let fixture: ComponentFixture<LoginAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAComponent]
    });
    fixture = TestBed.createComponent(LoginAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
