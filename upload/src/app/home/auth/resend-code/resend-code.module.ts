import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResendCodeComponent } from './resend-code.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ResendCodeComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ResendCodeComponent]
})
export class ResendCodeModule { }
