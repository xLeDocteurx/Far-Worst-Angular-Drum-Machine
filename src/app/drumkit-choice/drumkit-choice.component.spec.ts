import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumkitChoiceComponent } from './drumkit-choice.component';

describe('DrumkitChoiceComponent', () => {
  let component: DrumkitChoiceComponent;
  let fixture: ComponentFixture<DrumkitChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumkitChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumkitChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
