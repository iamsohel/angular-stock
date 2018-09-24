import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JamaicaMarketComponent } from './jamaica-market.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: JamaicaMarketComponent,

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [JamaicaMarketComponent]
})
export class JamaicaMarketModule { }
