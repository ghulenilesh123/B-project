import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartJsComponent } from './chart-js.component';
import { NgChartsModule } from 'ng2-charts'; // ✅ required for baseChart directive

describe('ChartJsComponent', () => {
  let component: ChartJsComponent;
  let fixture: ComponentFixture<ChartJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartJsComponent],
      imports: [NgChartsModule] // ✅ this makes baseChart and bindings work
    }).compileComponents();

    fixture = TestBed.createComponent(ChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // ngOnInit if needed
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
