import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedOffersComponent } from './applied-offers.component';

describe('AppliedOffersComponent', () => {
  let component: AppliedOffersComponent;
  let fixture: ComponentFixture<AppliedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
