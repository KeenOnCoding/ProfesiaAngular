import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinfineComponent } from './finfine.component';

describe('FinfineComponent', () => {
  let component: FinfineComponent;
  let fixture: ComponentFixture<FinfineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinfineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
