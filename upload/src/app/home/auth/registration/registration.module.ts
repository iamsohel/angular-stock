import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { HeaderModule } from '../../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
