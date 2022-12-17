import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayVacanciesComponent } from './vacancies/display-vacancies/display-vacancies.component';
import { InsertVacancyComponent } from './vacancies/insert-vacancy/insert-vacancy.component';
import { AdminLoggedInGuard } from '../../guards/admin-logged-in.guard';
import { GetVacanciesResolver } from '../../resolvers/get-vacancies.resolver';


const routes: Routes = [
  {
    path: "", component: DisplayVacanciesComponent, resolve:{vacancy:GetVacanciesResolver}
  },
  {
    path: "show", component: DisplayVacanciesComponent, resolve:{vacancy:GetVacanciesResolver}
  },
  {
    canActivate:[AdminLoggedInGuard],
    path: "insert", component: InsertVacancyComponent
  },
  // {
  //   canActivate:[AdminLoggedInGuard],
  //   path: "update/:id", component: InsertVacancyComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
