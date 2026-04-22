import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntetePage } from './entete-page';

describe('EntetePage', () => {
  let component: EntetePage;
  let fixture: ComponentFixture<EntetePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntetePage],
    }).compileComponents();

    fixture = TestBed.createComponent(EntetePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
