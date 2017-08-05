import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtimeComponent } from './ptime.component';

describe('PtimeComponent', () => {
  let component: PtimeComponent;
  let fixture: ComponentFixture<PtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
