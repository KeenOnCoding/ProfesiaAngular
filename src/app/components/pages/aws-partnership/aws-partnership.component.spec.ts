import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsPartnershipComponent } from './aws-partnership.component';

describe('AwsPartnershipComponent', () => {
  let component: AwsPartnershipComponent;
  let fixture: ComponentFixture<AwsPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsPartnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
