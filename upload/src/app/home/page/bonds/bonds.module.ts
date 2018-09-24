import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondsComponent } from './bonds.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: BondsComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BondsComponent]
})
export class BondsModule { }
