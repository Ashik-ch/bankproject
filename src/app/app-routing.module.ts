import { transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", component: LoginComponent },
  { path: "forgot", component: ForgotComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'creditcard', component: CreditcardComponent },
  { path: 'transaction', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

