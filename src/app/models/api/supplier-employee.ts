import { SupplierEmployeeRole } from "../../enums/supplier-employee-role";
import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Supplier } from "./supplier";

export interface SupplierEmployee extends ApiModel, TimeStamps {

    supplier: Supplier;
    role: SupplierEmployeeRole;
}