import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gaurd4Component } from './gaurd-4.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('Gaurd4Component', () => {
  let component: Gaurd4Component;
  let fixture: ComponentFixture<Gaurd4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gaurd4Component ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of([[null, 'mocked value']])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Gaurd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
