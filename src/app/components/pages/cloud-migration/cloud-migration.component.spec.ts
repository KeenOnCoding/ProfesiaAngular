import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMigrationComponent } from './cloud-migration.component';

describe('CloudMigrationComponent', () => {
  let component: CloudMigrationComponent;
  let fixture: ComponentFixture<CloudMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
