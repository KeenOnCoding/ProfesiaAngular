import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CynComponent } from './cyn.component';

describe('CynComponent', () => {
  let component: CynComponent;
  let fixture: ComponentFixture<CynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
