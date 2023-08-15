import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategroyComponent } from './add-categroy.component';

describe('AddCategroyComponent', () => {
  let component: AddCategroyComponent;
  let fixture: ComponentFixture<AddCategroyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategroyComponent]
    });
    fixture = TestBed.createComponent(AddCategroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
