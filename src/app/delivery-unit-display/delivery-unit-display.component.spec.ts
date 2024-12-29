import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryUnitDisplayComponent } from './delivery-unit-display.component';

describe('DeliveryUnitDisplayComponent', () => {
  let component: DeliveryUnitDisplayComponent;
  let fixture: ComponentFixture<DeliveryUnitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryUnitDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryUnitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
