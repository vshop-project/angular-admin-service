import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPurchaseStatusViewComponent } from './scheduled-purchase-status-view.component';

describe('ScheduledPurchaseStatusViewComponent', () => {
  let component: ScheduledPurchaseStatusViewComponent;
  let fixture: ComponentFixture<ScheduledPurchaseStatusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledPurchaseStatusViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPurchaseStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
