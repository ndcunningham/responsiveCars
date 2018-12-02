import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarPageComponent } from './view-car-page.component';

describe('ViewCarPageComponent', () => {
  let component: ViewCarPageComponent;
  let fixture: ComponentFixture<ViewCarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
