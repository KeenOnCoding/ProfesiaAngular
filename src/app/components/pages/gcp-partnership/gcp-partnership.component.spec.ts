import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpPartnershipComponent } from './gcp-partnership.component';

describe('GcpPartnershipComponent', () => {
  let component: GcpPartnershipComponent;
  let fixture: ComponentFixture<GcpPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpPartnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcpPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
