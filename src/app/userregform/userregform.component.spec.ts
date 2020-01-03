import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregformComponent } from './userregform.component';

describe('UserregformComponent', () => {
  let component: UserregformComponent;
  let fixture: ComponentFixture<UserregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
