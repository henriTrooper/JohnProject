import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrassementComponent } from './terrassement.component';

describe('ExperienceComponent', () => {
  let component: TerrassementComponent;
  let fixture: ComponentFixture<TerrassementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerrassementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
