import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Parent2Component } from './parent2.component';

@Component({
  selector: 'app-inner-child',
  template: '' // Mocked version of the child
})
class MockInnerChildComponent {}

describe('Parent2Component', () => {
  let component: Parent2Component;
  let fixture: ComponentFixture<Parent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Parent2Component,
        MockInnerChildComponent // ✅ Declare the mock component
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Parent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
