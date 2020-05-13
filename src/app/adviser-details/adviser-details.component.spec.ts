import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserDetailsComponent } from './adviser-details.component';

describe('AdviserDetailsComponent', () => {
  let component: AdviserDetailsComponent;
  let fixture: ComponentFixture<AdviserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
