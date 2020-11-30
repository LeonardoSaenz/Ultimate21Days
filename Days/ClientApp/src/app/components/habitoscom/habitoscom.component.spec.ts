import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitoscomComponent } from './habitoscom.component';

describe('HabitoscomComponent', () => {
  let component: HabitoscomComponent;
  let fixture: ComponentFixture<HabitoscomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitoscomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitoscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
