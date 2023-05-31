import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteOffersComponent } from './favorite-offers.component';

describe('FavoriteOffersComponent', () => {
  let component: FavoriteOffersComponent;
  let fixture: ComponentFixture<FavoriteOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
