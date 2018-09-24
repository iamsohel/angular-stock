import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
