import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesPosComponent } from './sales-pos/sales-pos.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
    {
        path: '',
        component: SalesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'pos',
                component: SalesPosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }
