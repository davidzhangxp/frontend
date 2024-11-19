import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { SettingComponent } from './setting/setting.component';
import { MainbarComponent } from './mainbar/mainbar.component';

const routes: Routes = [
  {path:'', component:MainbarComponent},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent},
  {path:'setting', component:SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
