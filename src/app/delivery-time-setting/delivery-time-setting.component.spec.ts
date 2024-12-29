import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTimeSettingComponent } from './delivery-time-setting.component';

describe('DeliveryTimeSettingComponent', () => {
  let component: DeliveryTimeSettingComponent;
  let fixture: ComponentFixture<DeliveryTimeSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTimeSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTimeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
