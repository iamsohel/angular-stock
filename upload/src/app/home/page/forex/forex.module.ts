import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForexComponent } from './forex.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ForexComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ForexComponent]
})
export class ForexModule { }
