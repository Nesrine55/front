import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryofferComponent } from './historyoffer.component';

describe('HistoryofferComponent', () => {
  let component: HistoryofferComponent;
  let fixture: ComponentFixture<HistoryofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
