import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits/deposits.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
    {
        path: '',
        component: StockComponent,
        children: [
            {
                path: 'deposits',
                component: DepositsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }
