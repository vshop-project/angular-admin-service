import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledPurchaseDisplayComponent } from './scheduled-purchase-display.component';

describe('ScheduledPurchaseDisplayComponent', () => {
  let component: ScheduledPurchaseDisplayComponent;
  let fixture: ComponentFixture<ScheduledPurchaseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledPurchaseDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledPurchaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
