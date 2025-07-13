import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FireComponent } from './fire.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FireComponent', () => {
  let component: FireComponent;
  let fixture: ComponentFixture<FireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of([{ mockData: 'test value from resolver' }])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
