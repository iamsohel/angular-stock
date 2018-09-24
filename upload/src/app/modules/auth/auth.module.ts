import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthConfig, AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {AdminGuard} from './_gaurds/admin.guard';
import {EmployeeGuard} from './_gaurds/employee.guard';

export interface UserData {
    id?: number;
    name: string;
    email: string;
    token: string;
    roles: string;
    user_id?: number;
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [AuthService, AuthGuard, AdminGuard, EmployeeGuard]
})
export class AuthModule {
    constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
        if (parentModule) {
            throw new Error(
                'AlertModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(@Optional()config?: AuthConfig): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                {provide: AuthConfig, useValue: config}
            ]
        };
    }
}
