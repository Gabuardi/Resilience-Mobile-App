import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LocationsProviderService} from './services/locations-provider.service';
import {HttpClientModule} from '@angular/common/http';

// ---------------------------------------------------------------------------
// FACTORY FUNCTION -> LOAD THE LOCATION DATA
// ---------------------------------------------------------------------------
export function locationProviderFactory(provider: LocationsProviderService) {
    return () => provider.load();
} // ENDS

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: APP_INITIALIZER, useFactory: locationProviderFactory, deps: [LocationsProviderService], multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
