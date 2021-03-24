import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleOrdersComponent } from './sale-orders/sale-orders.component';
import { PosCustomerComponent } from './sales-pos/pos-customer/pos-customer.component';
import { PosDeliveryComponent } from './sales-pos/pos-delivery/pos-delivery.component';
import { PosPaymentComponent } from './sales-pos/pos-payment/pos-payment.component';
import { PosProductsComponent } from './sales-pos/pos-products/pos-products.component';
import { PosSummaryComponent } from './sales-pos/pos-summary/pos-summary.component';
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
                component: SalesPosComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'customer'
                    },
                    {
                        path: 'customer',
                        component: PosCustomerComponent
                    },
                    {
                        path: 'products',
                        component: PosProductsComponent
                    },
                    {
                        path: 'delivery',
                        component: PosDeliveryComponent
                    },
                    {
                        path: 'payment',
                        component: PosPaymentComponent
                    },
                    {
                        path: 'summary',
                        component: PosSummaryComponent
                    }
                ]
            },
            {
                path: 'orders',
                component: SaleOrdersComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }
