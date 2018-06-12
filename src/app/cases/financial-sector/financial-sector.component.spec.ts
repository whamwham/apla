import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSectorComponent } from './financial-sector.component';

describe('FinancialSectorComponent', () => {
  let component: FinancialSectorComponent;
  let fixture: ComponentFixture<FinancialSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
