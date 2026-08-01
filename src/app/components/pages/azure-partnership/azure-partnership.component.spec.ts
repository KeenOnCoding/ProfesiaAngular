import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurePartnershipComponent } from './azure-partnership.component';

describe('ZurePartnershipComponent', () => {
  let component: AzurePartnershipComponent;
  let fixture: ComponentFixture<AzurePartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzurePartnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzurePartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
