import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './pages/detail/detail.component';
import {ListComponent} from './pages/list/list.component';

const routes: Routes = [
    {path: '', component: ListComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
