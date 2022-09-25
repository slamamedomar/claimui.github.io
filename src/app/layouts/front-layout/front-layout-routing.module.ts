import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/app/Components/user/aboutus/aboutus.component';
import { ContactComponent } from 'src/app/Components/user/contact/contact.component';
import { ForgotpasswordComponent } from 'src/app/Components/user/forgotpassword/forgotpassword.component';
import { HomeComponent } from 'src/app/Components/user/home/home.component';
import { LoginComponent } from 'src/app/Components/user/login/login.component';
import { RegisterComponent } from 'src/app/Components/user/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontLayoutRoutingModule { }
