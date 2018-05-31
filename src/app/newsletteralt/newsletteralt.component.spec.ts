import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterAltComponent } from './newsletteralt.component';

describe('NewsletterAltComponent', () => {
  let component: NewsletterAltComponent;
  let fixture: ComponentFixture<NewsletterAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
