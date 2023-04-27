import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailverifpasswordComponent } from './mailverifpassword.component';

describe('MailverifpasswordComponent', () => {
  let component: MailverifpasswordComponent;
  let fixture: ComponentFixture<MailverifpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailverifpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailverifpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
