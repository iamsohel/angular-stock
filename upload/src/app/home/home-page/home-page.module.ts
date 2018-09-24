import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
