import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpWithInjectorModule} from './modules/http-with-injector/http-with-injector.module';
import {AuthModule} from './modules/auth/auth.module';
import { ScriptLoaderService } from './globals/script-loader.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpWithInjectorModule.forRoot(),
        AuthModule.forRoot(),
    ],
    providers: [ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
