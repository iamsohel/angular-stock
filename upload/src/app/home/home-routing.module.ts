import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                loadChildren: '../../app/home/home-page/home-page.module#HomePageModule'
            },
            {
                path: 'forex',
                loadChildren: '../../app/home/page/forex/forex.module#ForexModule'
            },
            {
                path: 'bonds',
                loadChildren: '../../app/home/page/bonds/bonds.module#BondsModule'
            },
            {
                path: 'profile',
                loadChildren: '../../app/home/page/profile/profile.module#ProfileModule'
            },
            {
                path: 'jamaica-market',
                loadChildren: '../../app/home/page/jamaica-market/jamaica-market.module#JamaicaMarketModule'
            },
            {
                path: 'login',
                loadChildren: '../../app/home/auth/login/login.module#LoginModule'
            },
            {
                path: 'reset-password',
                loadChildren: '../../app/home/auth/reset-password/reset-password.module#ResetPasswordModule'
            },
            {
                path: 'resend-code',
                loadChildren: '../../app/home/auth/resend-code/resend-code.module#ResendCodeModule'
            },
            {
                path: 'forget-password',
                loadChildren: '../../app/home/auth/forget-password/forget-password.module#ForgetPasswordModule'
            },
            {
                path: 'activate-account',
                loadChildren: '../../app/home/auth/activate-account/activate-account.module#ActivateAccountModule'
            },
            {
                path: 'register',
                loadChildren: '../../app/home/auth/registration/registration.module#RegistrationModule'
            },


        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
