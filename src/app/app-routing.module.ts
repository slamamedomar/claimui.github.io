import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { ProfessionalLayoutComponent } from './layouts/professional-layout/professional-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '',
   component: FrontLayoutComponent,
    children: [
      {
        path: '',
       loadChildren: () => import('src/app/layouts/front-layout/front-layout.module').then(m => m.FrontLayoutModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'professional',
    component: ProfessionalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/professional-layout/professional-layout.module').then(m => m.ProfessionalLayoutModule)
      }
    ]
  },












  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
