import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDashbordComponent } from 'src/app/Components/admin/admin-dashbord/admin-dashbord.component';
import { AdminProfileComponent } from 'src/app/Components/admin/admin-profile/admin-profile.component';
import { AdminnavbarComponent } from 'src/app/Components/admin/adminnavbar/adminnavbar.component';
import { AdminSideBarComponent } from 'src/app/Components/admin/admin-side-bar/admin-side-bar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminReservationComponent } from '../../Components/admin/admin-reservation/admin-reservation.component';
import { AdminMessagesComponent } from '../../Components/admin/admin-messages/admin-messages.component';
import { AdminVerificationComponent } from '../../Components/admin/admin-verification/admin-verification.component';
import { AdminPaymentComponent } from '../../Components/admin/admin-payment/admin-payment.component';
import { AdminFeedbackComponent } from '../../Components/admin/admin-feedback/admin-feedback.component';
import { AdminClaimComponent } from '../../Components/admin/admin-claim/admin-claim.component';
import { AdminSettingsComponent } from '../../Components/admin/admin-settings/admin-settings.component';
import { AdminAddinformationsComponent } from '../../Components/admin/admin-addinformations/admin-addinformations.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashbordComponent,
    AdminProfileComponent,
    AdminnavbarComponent,
    AdminSideBarComponent,
    AdminReservationComponent,
    AdminMessagesComponent,
    AdminVerificationComponent,
    AdminPaymentComponent,
    AdminFeedbackComponent,
    AdminClaimComponent,
    AdminSettingsComponent,
    AdminAddinformationsComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,

    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule

  ]
})
export class AdminLayoutModule { }
