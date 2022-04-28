import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaconnerieComponent } from './maconnerie.component';

describe('SkillsComponent', () => {
  let component: MaconnerieComponent;
  let fixture: ComponentFixture<MaconnerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaconnerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaconnerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
