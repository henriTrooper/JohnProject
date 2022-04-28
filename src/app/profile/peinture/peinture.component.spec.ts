import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeintureComponent } from './peinture.component';

describe('EducationComponent', () => {
  let component: PeintureComponent;
  let fixture: ComponentFixture<PeintureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeintureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
