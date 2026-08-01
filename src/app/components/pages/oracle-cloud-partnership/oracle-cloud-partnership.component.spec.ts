import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleCloudPartnershipComponent } from './oracle-cloud-partnership.component';

describe('OracleCloudPartnershipComponent', () => {
  let component: OracleCloudPartnershipComponent;
  let fixture: ComponentFixture<OracleCloudPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OracleCloudPartnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OracleCloudPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
