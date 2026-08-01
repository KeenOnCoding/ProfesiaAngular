import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGenaiServicesComponent } from './ai-genai-services.component';

describe('AiGenaiServicesComponent', () => {
  let component: AiGenaiServicesComponent;
  let fixture: ComponentFixture<AiGenaiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiGenaiServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiGenaiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
