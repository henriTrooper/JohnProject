import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssainissementComponent } from './assainissement.component';

describe('EducationComponent', () => {
  let component: AssainissementComponent;
  let fixture: ComponentFixture<AssainissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssainissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssainissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
