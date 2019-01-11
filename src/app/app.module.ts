import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './pages/detail/detail.component';
import {ListComponent} from './pages/list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
