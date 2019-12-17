import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageVerificationComponent } from './coverage-verification.component';

describe('CoverageVerificationComponent', () => {
  let component: CoverageVerificationComponent;
  let fixture: ComponentFixture<CoverageVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
