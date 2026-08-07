import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreemzComponent } from './dreemz.component';

describe('DreemzComponent', () => {
  let component: DreemzComponent;
  let fixture: ComponentFixture<DreemzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreemzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreemzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
