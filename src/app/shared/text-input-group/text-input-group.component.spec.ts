import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputGroupComponent } from './text-input-group.component';

describe('TextInputGroupComponent', () => {
  let component: TextInputGroupComponent;
  let fixture: ComponentFixture<TextInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
