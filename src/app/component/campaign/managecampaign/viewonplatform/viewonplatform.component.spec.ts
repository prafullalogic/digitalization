import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonplatformComponent } from './viewonplatform.component';

describe('ViewonplatformComponent', () => {
  let component: ViewonplatformComponent;
  let fixture: ComponentFixture<ViewonplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewonplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewonplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
