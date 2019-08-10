import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { LoginComponent }  from './login/login.component';
import { MykiipboxComponent }  from './mykiipbox/mykiipbox.component';
import { CreatekiipboxComponent } from './createkiipbox/createkiipbox.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'mykiipbox', component: MykiipboxComponent, },
  { path: 'createkiipbox', component: CreatekiipboxComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{  enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
