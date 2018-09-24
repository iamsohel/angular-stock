import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateAccountComponent } from './activate-account.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ActivateAccountComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ActivateAccountComponent]
})
export class ActivateAccountModule { }
