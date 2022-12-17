import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayVacanciesComponent } from './vacancies/display-vacancies/display-vacancies.component';
import { UserRoutingModule } from './user-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InsertVacancyComponent } from './vacancies/insert-vacancy/insert-vacancy.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayVacanciesComponent,
    InsertVacancyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],exports:[
    DisplayVacanciesComponent
  ]
})
export class UserModule { }
