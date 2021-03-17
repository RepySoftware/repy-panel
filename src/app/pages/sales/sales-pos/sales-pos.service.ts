import { Injectable } from "@angular/core";
import { Person } from "../../../models/api/person";
import { PersonSearch } from "../../../models/api/person-search";

@Injectable()
export class SalesPosService {

    public personCustomer: PersonSearch;
}