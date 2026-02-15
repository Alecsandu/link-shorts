import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreMainComponent } from './app-core-main.component';

describe('AppCoreMainComponent', () => {
  let component: AppCoreMainComponent;
  let fixture: ComponentFixture<AppCoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCoreMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCoreMainComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
