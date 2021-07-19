import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileManagementComponent } from './create-profile-management.component';

describe('CreateProfileManagementComponent', () => {
  let component: CreateProfileManagementComponent;
  let fixture: ComponentFixture<CreateProfileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
