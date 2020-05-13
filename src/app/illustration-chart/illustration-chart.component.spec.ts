import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationChartComponent } from './illustration-chart.component';

describe('IllustrationChartComponent', () => {
  let component: IllustrationChartComponent;
  let fixture: ComponentFixture<IllustrationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
