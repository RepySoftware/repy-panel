import { UserDeviceRole } from "../../enums/user-device-role";
import { Device } from "./device";

export interface UserDevice {

    device: Device;
    role: UserDeviceRole;
}