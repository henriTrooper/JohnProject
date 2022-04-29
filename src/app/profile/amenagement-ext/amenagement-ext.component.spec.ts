import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenagementExtComponent } from './amenagement-ext.component';

describe('AmenagementExtComponent', () => {
  let component: AmenagementExtComponent;
  let fixture: ComponentFixture<AmenagementExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenagementExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmenagementExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
