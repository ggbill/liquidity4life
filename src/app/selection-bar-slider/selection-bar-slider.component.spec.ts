import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBarSliderComponent } from './selection-bar-slider.component';

describe('SelectionBarSliderComponent', () => {
  let component: SelectionBarSliderComponent;
  let fixture: ComponentFixture<SelectionBarSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionBarSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionBarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
