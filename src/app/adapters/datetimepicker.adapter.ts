import { NgxMatDateAdapter } from "@angular-material-components/datetime-picker";
import { Injectable } from "@angular/core";
import { Moment } from "moment";

@Injectable()
export class DatetimepickerAdapter extends NgxMatDateAdapter<Moment> { }