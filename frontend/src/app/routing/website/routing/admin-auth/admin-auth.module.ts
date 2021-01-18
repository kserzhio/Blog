import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginPageComponent } from './pages/login-page/admin-login-page.component';
import { RouterModule } from '@angular/router';
import { AdminLoginBlockModule } from 'src/app/view/admin-login-block/admin-login-block.module';

const routes = [
  {
    path:'',
    pathMatch: 'full',
    redirecTo: 'login'
  },
  {
    path:'login',
    component: AdminLoginPageComponent
  }
]

@NgModule({
  declarations: [AdminLoginPageComponent],
  imports: [
    CommonModule,
    AdminLoginBlockModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminAuthModule { }
