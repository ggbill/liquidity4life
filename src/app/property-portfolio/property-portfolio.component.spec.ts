import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPortfolioComponent } from './property-portfolio.component';

describe('PropertyPortfolioComponent', () => {
  let component: PropertyPortfolioComponent;
  let fixture: ComponentFixture<PropertyPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
