import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationContainerComponent } from './character-creation-container.component';

describe('CharacterCreationContainerComponent', () => {
  let component: CharacterCreationContainerComponent;
  let fixture: ComponentFixture<CharacterCreationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCreationContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
