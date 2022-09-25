import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddinformationsComponent } from './admin-addinformations.component';

describe('AdminAddinformationsComponent', () => {
  let component: AdminAddinformationsComponent;
  let fixture: ComponentFixture<AdminAddinformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddinformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
