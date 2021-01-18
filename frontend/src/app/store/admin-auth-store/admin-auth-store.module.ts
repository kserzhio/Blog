import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { adminAuthReducer, ADMIN_AUTH_FEATURENAME } from './store/admin-auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminAuthEffects } from './store/admin-auth.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(ADMIN_AUTH_FEATURENAME, adminAuthReducer),
    EffectsModule.forFeature([AdminAuthEffects])
  ] 
})
export class AdminAuthStoreModule { }
