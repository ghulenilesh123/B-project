import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldMultiTripComponent } from './gold-multi-trip.component';

describe('GoldMultiTripComponent', () => {
  let component: GoldMultiTripComponent;
  let fixture: ComponentFixture<GoldMultiTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoldMultiTripComponent]
    });
    fixture = TestBed.createComponent(GoldMultiTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
