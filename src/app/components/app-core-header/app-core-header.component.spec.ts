import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreHeaderComponent } from './app-core-header.component';

describe('AppCoreHeaderComponent', () => {
  let component: AppCoreHeaderComponent;
  let fixture: ComponentFixture<AppCoreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCoreHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCoreHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
