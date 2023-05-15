import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeusernavbarComponent } from './homeusernavbar.component';

describe('HomeusernavbarComponent', () => {
  let component: HomeusernavbarComponent;
  let fixture: ComponentFixture<HomeusernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeusernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeusernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
