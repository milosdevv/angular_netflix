import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MovieDashboardModule } from './movie-dashboard/movie-dashboard.module';
import { NavbarComponent } from './base/navbar/navbar.component';
import { FooterComponent } from './base/footer/footer.component';

const routes:Routes = [
  {path:'login', component:LoginFormComponent},
  {path:'dashboard',component:MovieDashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    MovieDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
