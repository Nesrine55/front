import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoffreComponent } from './createoffre.component';

describe('CreateoffreComponent', () => {
  let component: CreateoffreComponent;
  let fixture: ComponentFixture<CreateoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
