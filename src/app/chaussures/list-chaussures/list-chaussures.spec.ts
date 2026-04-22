import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaussures } from './list-chaussures';

describe('ListChaussures', () => {
  let component: ListChaussures;
  let fixture: ComponentFixture<ListChaussures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChaussures],
    }).compileComponents();

    fixture = TestBed.createComponent(ListChaussures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
