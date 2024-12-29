import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPriorityUpdateComponent } from './delivery-priority-update.component';

describe('DeliveryPriorityUpdateComponent', () => {
  let component: DeliveryPriorityUpdateComponent;
  let fixture: ComponentFixture<DeliveryPriorityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPriorityUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPriorityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
