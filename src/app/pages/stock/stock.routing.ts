import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits/deposits.component';
import { StockControlComponent } from './stock-control/stock-control.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
    {
        path: '',
        component: StockComponent,
        children: [
            {
                path: 'deposits',
                component: DepositsComponent
            },
            {
                path: 'stock-control',
                component: StockControlComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }
