import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRetrieveComponent } from './delivery-retrieve.component';

describe('DeliveryRetrieveComponent', () => {
  let component: DeliveryRetrieveComponent;
  let fixture: ComponentFixture<DeliveryRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
