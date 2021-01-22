import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  adminAuthReducer,
  ADMIN_AUTH_FEATURENAME,
} from './store/admin-auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminAuthEffects } from './store/admin-auth.effects';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminAuthInterceptor } from './interceptors/admin-auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (request) => request as any,
      },
    }),
    StoreModule.forFeature(ADMIN_AUTH_FEATURENAME, adminAuthReducer),
    EffectsModule.forFeature([AdminAuthEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminAuthInterceptor,
      multi: true,
    },
  ],
})
export class AdminAuthStoreModule {}
