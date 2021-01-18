import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [HomePageComponent]
})
export class HomeModule {}
