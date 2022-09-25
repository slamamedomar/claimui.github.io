import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontLayoutRoutingModule } from './front-layout-routing.module';
import { FrontLayoutComponent } from './front-layout.component';
import { HeaderComponent } from 'src/app/Components/user/header/header.component';
import { FooterComponent } from 'src/app/Components/user/footer/footer.component';
import { LoginComponent } from 'src/app/Components/user/login/login.component';
import { RegisterComponent } from 'src/app/Components/user/register/register.component';
import { HomeComponent } from 'src/app/Components/user/home/home.component';
import { AboutusComponent } from 'src/app/Components/user/aboutus/aboutus.component';
import { ContactComponent } from 'src/app/Components/user/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from 'src/app/Components/user/forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    FrontLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    FrontLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule  ,
  ],
  exports : [
    HeaderComponent,
    FooterComponent,  

  ],
})
export class FrontLayoutModule { }
