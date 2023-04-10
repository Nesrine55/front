import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentexplorepageComponent } from './studentexplorepage.component';

describe('StudentexplorepageComponent', () => {
  let component: StudentexplorepageComponent;
  let fixture: ComponentFixture<StudentexplorepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentexplorepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentexplorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
