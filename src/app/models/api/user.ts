import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Company } from "./company";
import { Employee } from "./employee";
import { Person } from "./person";

export interface User extends ApiModel, TimeStamps {

    person: Person;
    employee: Employee;
    company: Company;
    username: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
}