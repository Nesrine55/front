import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProfilesComponent } from './favorite-profiles.component';

describe('FavoriteProfilesComponent', () => {
  let component: FavoriteProfilesComponent;
  let fixture: ComponentFixture<FavoriteProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
