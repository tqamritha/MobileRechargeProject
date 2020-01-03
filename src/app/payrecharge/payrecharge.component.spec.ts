import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrechargeComponent } from './payrecharge.component';

describe('PayrechargeComponent', () => {
  let component: PayrechargeComponent;
  let fixture: ComponentFixture<PayrechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
