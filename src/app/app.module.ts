import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './pages/detail/detail.component';
import {ListComponent} from './pages/list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BirthyearComponent} from './shared/components/birthyear/birthyear.component';
import {UnicornCardComponent} from './shared/components/unicorn-card/unicorn-card.component';
import {EditUnicornComponent} from './shared/modals/edit-unicorn/edit-unicorn.component';
import {PairValidatorDirective} from './shared/directives/pair-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        DetailComponent,
        ListComponent,
        NavComponent,
        UnicornCardComponent,
        EditUnicornComponent,
        BirthyearComponent,
        PairValidatorDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornComponent
    ]
})
export class AppModule {
}
