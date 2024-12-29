import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeCreateComponent } from './shope-create.component';

describe('ShopeCreateComponent', () => {
  let component: ShopeCreateComponent;
  let fixture: ComponentFixture<ShopeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
