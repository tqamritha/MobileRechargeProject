import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpannelComponent } from './userpannel.component';

describe('UserpannelComponent', () => {
  let component: UserpannelComponent;
  let fixture: ComponentFixture<UserpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
