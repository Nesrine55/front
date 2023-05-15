import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreforcompanyComponent } from './exploreforcompany.component';

describe('ExploreforcompanyComponent', () => {
  let component: ExploreforcompanyComponent;
  let fixture: ComponentFixture<ExploreforcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreforcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreforcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
