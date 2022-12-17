import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVacanciesComponent } from './display-vacancies.component';

describe('DisplayVacanciesComponent', () => {
  let component: DisplayVacanciesComponent;
  let fixture: ComponentFixture<DisplayVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
