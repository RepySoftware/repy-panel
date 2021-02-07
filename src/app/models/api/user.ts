import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Person } from "./person";

export interface User extends ApiModel, TimeStamps {

    person: Person;
    username: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
}