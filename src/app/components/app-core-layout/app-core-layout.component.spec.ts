import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreLayoutComponent } from './app-core-layout.component';

describe('AppCoreLayoutComponent', () => {
  let component: AppCoreLayoutComponent;
  let fixture: ComponentFixture<AppCoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCoreLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCoreLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
