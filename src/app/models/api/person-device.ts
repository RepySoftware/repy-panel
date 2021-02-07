import { PersonDeviceRole } from "../../enums/person-device-role";
import { Device } from "./device";

export interface PersonDevice {

    device: Device;
    role: PersonDeviceRole;
}