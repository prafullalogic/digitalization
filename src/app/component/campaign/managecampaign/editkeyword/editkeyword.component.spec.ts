import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkeywordComponent } from './editkeyword.component';

describe('EditkeywordComponent', () => {
  let component: EditkeywordComponent;
  let fixture: ComponentFixture<EditkeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditkeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
