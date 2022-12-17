import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./components/authentication/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/components/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'vacancy',
    loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
