import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddinformationsComponent } from 'src/app/Components/admin/admin-addinformations/admin-addinformations.component';
import { AdminClaimComponent } from 'src/app/Components/admin/admin-claim/admin-claim.component';
import { AdminDashbordComponent } from 'src/app/Components/admin/admin-dashbord/admin-dashbord.component';
import { AdminFeedbackComponent } from 'src/app/Components/admin/admin-feedback/admin-feedback.component';
import { AdminMessagesComponent } from 'src/app/Components/admin/admin-messages/admin-messages.component';
import { AdminPaymentComponent } from 'src/app/Components/admin/admin-payment/admin-payment.component';
import { AdminProfileComponent } from 'src/app/Components/admin/admin-profile/admin-profile.component';
import { AdminReservationComponent } from 'src/app/Components/admin/admin-reservation/admin-reservation.component';
import { AdminSettingsComponent } from 'src/app/Components/admin/admin-settings/admin-settings.component';
import { AdminVerificationComponent } from 'src/app/Components/admin/admin-verification/admin-verification.component';

const routes: Routes = [
  { path: '',      component: AdminDashbordComponent },
  { path: 'dashboard',      component: AdminDashbordComponent },
  { path: 'profile',   component: AdminProfileComponent },
  { path: 'reservation',   component: AdminReservationComponent },
  { path: 'messages',   component: AdminMessagesComponent },
  { path: 'verification',   component: AdminVerificationComponent },
  { path: 'payment',   component: AdminPaymentComponent },
  { path: 'feedback',   component: AdminFeedbackComponent },
  { path: 'claim',   component: AdminClaimComponent },
  { path: 'settings',   component: AdminSettingsComponent },
  { path: 'addinformations',   component: AdminAddinformationsComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
