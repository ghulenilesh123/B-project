import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscParentComponent } from './misc-parent.component';

describe('MiscParentComponent', () => {
  let component: MiscParentComponent;
  let fixture: ComponentFixture<MiscParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscParentComponent]
    });
    fixture = TestBed.createComponent(MiscParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
