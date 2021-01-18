import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

const routes = [
  {
    path:'',
    pathMatch:'full',
    redirecTo: 'dasboard'
  },
  {
    path:'dashboard',
    loadChildren: () => import('./routing/dashboard/dashboard.module').then(module => module.DashboardModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
