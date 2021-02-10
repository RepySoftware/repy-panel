import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { PersonFilter } from '../models/output/filters/person.filter';
import { Person } from '../models/api/person';

@Injectable()
export class PersonService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll(filter: PersonFilter): Observable<Person[]> {
        return this._http.get<Person[]>(`${URLS.api.persons}`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }

    public getById(personId: number): Observable<Person> {
        return this._http.get<Person>(`${URLS.api.persons}/${personId}`);
    }
}