import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderssComponent } from './admin-orderss.component';

describe('AdminOrderssComponent', () => {
  let component: AdminOrderssComponent;
  let fixture: ComponentFixture<AdminOrderssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
