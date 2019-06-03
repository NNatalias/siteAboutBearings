import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PriceListComponent} from './price-list/price-list.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'priceList', component: PriceListComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        CommonModule
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {
}
