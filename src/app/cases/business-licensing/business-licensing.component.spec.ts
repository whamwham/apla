import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLicensingComponent } from './business-licensing.component';

describe('BusinessLicensingComponent', () => {
  let component: BusinessLicensingComponent;
  let fixture: ComponentFixture<BusinessLicensingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLicensingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLicensingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
