import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPendingPurchaseDisplayComponent } from './scheduled-pending-purchase-display.component';

describe('ScheduledPendingPurchaseDisplayComponent', () => {
  let component: ScheduledPendingPurchaseDisplayComponent;
  let fixture: ComponentFixture<ScheduledPendingPurchaseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledPendingPurchaseDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPendingPurchaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
