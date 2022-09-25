import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalLayoutRoutingModule } from './professional-layout-routing.module';
import { ProfessionalLayoutComponent } from './professional-layout.component';
import { ProfessionalDashbordComponent } from 'src/app/Components/professional/professional-dashbord/professional-dashbord.component';
import { ProfessionalNavBarComponent } from 'src/app/Components/professional/professional-nav-bar/professional-nav-bar.component';
import { ProfessionalProfileComponent } from 'src/app/Components/professional/professional-profile/professional-profile.component';
import { ProfessionalSideBarComponent } from 'src/app/Components/professional/professional-side-bar/professional-side-bar.component';


@NgModule({
  declarations: [
    ProfessionalLayoutComponent,
    ProfessionalDashbordComponent,
    ProfessionalNavBarComponent,
    ProfessionalProfileComponent,
    ProfessionalSideBarComponent,


  ],
  imports: [
    CommonModule,
    ProfessionalLayoutRoutingModule
  ]
})
export class ProfessionalLayoutModule { }
