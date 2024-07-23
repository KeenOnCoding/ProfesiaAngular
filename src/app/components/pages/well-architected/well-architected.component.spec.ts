import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellArchitectedComponent } from './well-architected.component';

describe('WellArchitectedComponent', () => {
  let component: WellArchitectedComponent;
  let fixture: ComponentFixture<WellArchitectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellArchitectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellArchitectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
