import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { PersonFilter } from '../models/output/filters/person.filter';
import { Person } from '../models/api/person';
import { PersonOutput } from '../models/output/person.output';

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

    public create(body: PersonOutput): Observable<Person> {
        return this._http.post<Person>(`${URLS.api.persons}`, body);
    }

    public update(body: PersonOutput): Observable<Person> {
        return this._http.put<Person>(`${URLS.api.persons}`, body);
    }
}