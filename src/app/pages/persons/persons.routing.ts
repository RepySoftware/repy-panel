import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsComponent } from './persons.component';

const routes: Routes = [
    {
        path: '',
        component: PersonsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: PersonsListComponent
            },
            {
                path: 'form',
                component: PersonFormComponent
            },
            {
                path: ':personId/form',
                component: PersonFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonsRoutingModule { }
