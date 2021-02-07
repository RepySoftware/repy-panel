import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: CustomersListComponent
            },
            {
                path: ':customerId/details',
                component: CustomerDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }
