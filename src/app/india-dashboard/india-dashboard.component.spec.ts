import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaDashboardComponent } from './india-dashboard.component';

describe('IndiaDashboardComponent', () => {
  let component: IndiaDashboardComponent;
  let fixture: ComponentFixture<IndiaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
