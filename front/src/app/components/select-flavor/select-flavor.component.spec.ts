import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlavorComponent } from './select-flavor.component';

describe('SelectFlavorComponent', () => {
  let component: SelectFlavorComponent;
  let fixture: ComponentFixture<SelectFlavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFlavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
