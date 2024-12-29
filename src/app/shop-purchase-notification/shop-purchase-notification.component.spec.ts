import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPurchaseNotificationComponent } from './shop-purchase-notification.component';

describe('ShopPurchaseNotificationComponent', () => {
  let component: ShopPurchaseNotificationComponent;
  let fixture: ComponentFixture<ShopPurchaseNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPurchaseNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPurchaseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
