import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
