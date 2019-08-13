import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MykiipboxComponent } from './mykiipbox/mykiipbox.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    MykiipboxComponent,
    CreatekiipboxComponent,
    PlanComponent,
    CardrepositoryComponent,
    CardscreenComponent,
    ReferfriendComponent,
    TemplatesComponent,
    SettingComponent,
    AccountComponent,
    PaymentmethodComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
