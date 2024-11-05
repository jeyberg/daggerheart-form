import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitSelectComponent } from './trait-select.component';

describe('TraitSelectComponent', () => {
  let component: TraitSelectComponent;
  let fixture: ComponentFixture<TraitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
