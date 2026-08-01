import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningOperationsComponent } from './machine-learning-operations.component';

describe('MachineLearningOperationsComponent', () => {
  let component: MachineLearningOperationsComponent;
  let fixture: ComponentFixture<MachineLearningOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLearningOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineLearningOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
