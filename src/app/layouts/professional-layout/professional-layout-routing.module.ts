import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalDashbordComponent } from 'src/app/Components/professional/professional-dashbord/professional-dashbord.component';
import { ProfessionalProfileComponent } from 'src/app/Components/professional/professional-profile/professional-profile.component';

const routes: Routes = [
  { path: 'dashboard',      component: ProfessionalDashbordComponent },
  { path: 'profile',   component: ProfessionalProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalLayoutRoutingModule { }
