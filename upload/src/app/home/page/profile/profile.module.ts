import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        loadChildren: '../../../../app/home/page/profile/news-feed/news-feed.module#NewsFeedModule'
      },
      // {
      //   path: 'private-post',
      //   loadChildren: '../../../../app/home/page/profile/private-post/private-post.module#PrivatePostModule'
      // },
      {
        path: 'news-feed',
        loadChildren: '../../../../app/home/page/profile/news-feed/news-feed.module#NewsFeedModule'
      },
      // {
      //   path: 'news-feed',
      //   loadChildren: '../../../../app/home/page/profile/news-feed/news-feed.module#NewsFeedModule'
      // },
    ]

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
