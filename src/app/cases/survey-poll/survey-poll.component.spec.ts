import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPollComponent } from './survey-poll.component';

describe('SurveyPollComponent', () => {
  let component: SurveyPollComponent;
  let fixture: ComponentFixture<SurveyPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
