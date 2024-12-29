import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMaintComponent } from './location-maint.component';

describe('LocationMaintComponent', () => {
  let component: LocationMaintComponent;
  let fixture: ComponentFixture<LocationMaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
