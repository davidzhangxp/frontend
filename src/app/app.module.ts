import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingComponent } from './setting/setting.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MainbarComponent } from './mainbar/mainbar.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { ImportTicketComponent } from './import-ticket/import-ticket.component';
import { CommonModule } from '@angular/common';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TicketListComponent,
    SettingComponent,
    MainbarComponent,
    TicketDetailsComponent,
    ImportTicketComponent,
    EditTicketComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
