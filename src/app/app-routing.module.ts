import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  {path:'', component:TicketListComponent},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
