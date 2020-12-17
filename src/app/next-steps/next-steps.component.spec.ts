import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepsComponent } from './next-steps.component';

describe('NextstepsComponent', () => {
  let component: NextStepsComponent;
  let fixture: ComponentFixture<NextStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
