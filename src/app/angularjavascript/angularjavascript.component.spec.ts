import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjavascriptComponent } from './angularjavascript.component';

describe('AngularjavascriptComponent', () => {
  let component: AngularjavascriptComponent;
  let fixture: ComponentFixture<AngularjavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjavascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
