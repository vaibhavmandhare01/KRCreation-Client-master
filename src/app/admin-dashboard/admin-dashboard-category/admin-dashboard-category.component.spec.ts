import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardCategoryComponent } from './admin-dashboard-category.component';

describe('AdminDashboardCategoryComponent', () => {
  let component: AdminDashboardCategoryComponent;
  let fixture: ComponentFixture<AdminDashboardCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
