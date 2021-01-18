import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { AdminGuestGuard } from '../guards/admin-guest.guard';
import { AdminAuthModule } from './routing/admin-auth/admin-auth.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./routing/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'admin/auth',
    loadChildren: () =>
      import('./routing/admin-auth/admin-auth.module').then(
        (module) => module.AdminAuthModule
      ),
    canLoad: [AdminGuestGuard],
    canActivate: [AdminGuestGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./routing/admin/admin.module').then(
        (module) => module.AdminModule
      ),
    canLoad: [AdminAuthModule],
    canActivate: [AdminAuthModule],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./routing/not-found/not-found.module').then(
        (module) => module.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
  ],
  exports: [RouterModule],
  providers: [AdminGuestGuard, AdminAuthGuard],
})
export class WebSiteModule {}
