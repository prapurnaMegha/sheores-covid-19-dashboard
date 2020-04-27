import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldGlanceComponent } from './world-glance.component';

describe('WorldGlanceComponent', () => {
  let component: WorldGlanceComponent;
  let fixture: ComponentFixture<WorldGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
