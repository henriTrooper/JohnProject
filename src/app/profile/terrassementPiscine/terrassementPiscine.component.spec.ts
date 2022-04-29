import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrassementPiscineComponent } from './terrassementPiscine.component';

describe('SkillsComponent', () => {
  let component: TerrassementPiscineComponent;
  let fixture: ComponentFixture<TerrassementPiscineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerrassementPiscineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrassementPiscineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
