import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SecureloginComponent } from './securelogin.component';

describe('SecureloginComponent', () => {
  let component: SecureloginComponent;
  let fixture: ComponentFixture<SecureloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
