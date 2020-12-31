import { UserType } from "../../enums/user-type";
import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Customer } from "./customer";
import { SupplierEmployee } from "./supplier-employee";
import { UserDevice } from "./user-device";

export interface User extends ApiModel, TimeStamps {

    name: string;
    username: string;
    email: string;
    type: UserType;
    supplierEmployee?: SupplierEmployee;
    customer?: Customer;
    isActive: boolean;
    userDevices: UserDevice[];
}