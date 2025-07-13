import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtLoginComponent } from './firt-login.component';

describe('FirtLoginComponent', () => {
  let component: FirtLoginComponent;
  let fixture: ComponentFixture<FirtLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirtLoginComponent]
    });
    fixture = TestBed.createComponent(FirtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
