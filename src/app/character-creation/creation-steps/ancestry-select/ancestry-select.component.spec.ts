import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestrySelectComponent } from './ancestry-select.component';

describe('AncestrySelectComponent', () => {
  let component: AncestrySelectComponent;
  let fixture: ComponentFixture<AncestrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncestrySelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncestrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
