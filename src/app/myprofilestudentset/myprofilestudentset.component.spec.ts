import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofilestudentsetComponent } from './myprofilestudentset.component';

describe('MyprofilestudentsetComponent', () => {
  let component: MyprofilestudentsetComponent;
  let fixture: ComponentFixture<MyprofilestudentsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofilestudentsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofilestudentsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
