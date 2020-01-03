import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrechargeComponent } from './addrecharge.component';

describe('AddrechargeComponent', () => {
  let component: AddrechargeComponent;
  let fixture: ComponentFixture<AddrechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
