import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCopyrightComponent } from './music-copyright.component';

describe('MusicCopyrightComponent', () => {
  let component: MusicCopyrightComponent;
  let fixture: ComponentFixture<MusicCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
