import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSideBarComponent } from './professional-side-bar.component';

describe('ProfessionalSideBarComponent', () => {
  let component: ProfessionalSideBarComponent;
  let fixture: ComponentFixture<ProfessionalSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
