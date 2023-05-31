import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCompanyDetailsComponent } from './profile-company-details.component';

describe('ProfileCompanyDetailsComponent', () => {
  let component: ProfileCompanyDetailsComponent;
  let fixture: ComponentFixture<ProfileCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCompanyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
