import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePostComponent } from './private-post.component';
const routes: Routes = [
  {
    path: '',
    component: PrivatePostComponent,


  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PrivatePostComponent]
})
export class PrivatePostModule { }
