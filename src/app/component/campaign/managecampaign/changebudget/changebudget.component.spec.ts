import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangebudgetComponent } from './changebudget.component';

describe('ChangebudgetComponent', () => {
  let component: ChangebudgetComponent;
  let fixture: ComponentFixture<ChangebudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangebudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangebudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
