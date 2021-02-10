import { PersonType } from "../../enums/person-type";
import { ApiModel } from "../abstraction/api-model";

export interface PersonPhone extends ApiModel {

    phone: string;
}