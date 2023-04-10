import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternsreviewsComponent } from './internsreviews.component';

describe('InternsreviewsComponent', () => {
  let component: InternsreviewsComponent;
  let fixture: ComponentFixture<InternsreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternsreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternsreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
