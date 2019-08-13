import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { LoginComponent }  from './login/login.component';
import { MykiipboxComponent }  from './mykiipbox/mykiipbox.component';
import { CreatekiipboxComponent } from './createkiipbox/createkiipbox.component';
import { PlanComponent } from './plan/plan.component';
import { CardrepositoryComponent } from './cardrepository/cardrepository.component';
import { CardscreenComponent } from './cardscreen/cardscreen.component';
import { ReferfriendComponent } from './referfriend/referfriend.component';
import { TemplatesComponent } from './templates/templates.component';
import { SettingComponent } from './setting/setting.component';
import { AccountComponent } from './account/account.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'mykiipbox', component: MykiipboxComponent, },
  { path: 'createkiipbox', component: CreatekiipboxComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'cardrepository', component: CardrepositoryComponent },
  { path: 'cardscreen', component: CardscreenComponent },
  { path: 'referfriend', component: ReferfriendComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'account', component: AccountComponent },
  { path: 'paymentmethod', component: PaymentmethodComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{  enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
