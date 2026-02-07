import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreFooterComponent } from './app-core-footer.component';

describe('AppCoreFooterComponent', () => {
  let component: AppCoreFooterComponent;
  let fixture: ComponentFixture<AppCoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCoreFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCoreFooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
