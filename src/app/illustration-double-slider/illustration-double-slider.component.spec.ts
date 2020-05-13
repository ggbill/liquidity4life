import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationDoubleSliderComponent } from './illustration-double-slider.component';

describe('IllustrationDoubleSliderComponent', () => {
  let component: IllustrationDoubleSliderComponent;
  let fixture: ComponentFixture<IllustrationDoubleSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationDoubleSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationDoubleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
