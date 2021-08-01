import { NgxMatDateAdapter } from "@angular-material-components/datetime-picker";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";

@Injectable()
export class CustomDateAdapter extends NgxMatDateAdapter<Moment> {

    public getHour(date: Moment): number {
        return date.hour();
    }

    public getMinute(date: Moment): number {
        return date.minute();
    }

    public getSecond(date: Moment): number {
        return date.second();
    }

    public setHour(date: Moment, value: number): void {
        date.hour(value);
    }

    public setMinute(date: Moment, value: number): void {
        date.minute(value);
    }

    public setSecond(date: Moment, value: number): void {
        date.second(value);
    }

    public getYear(date: Moment): number {
        return date.year();
    }

    public getMonth(date: Moment): number {
        return date.month();
    }

    public getDate(date: Moment): number {
        return date.day();
    }

    public getDayOfWeek(date: Moment): number {
        return date.weekday();
    }

    public getMonthNames(style: "long" | "short" | "narrow"): string[] {

        switch (style) {
            case 'long':
                return moment.months();
            case 'short':
                return moment.monthsShort();
            case 'narrow':
                return moment.monthsShort();
        }
    }

    public getDateNames(): string[] {
        return [];
    }

    public getDayOfWeekNames(style: "long" | "short" | "narrow"): string[] {

        switch (style) {
            case 'long':
                return moment.weekdays();
            case 'short':
                return moment.weekdaysShort();
            case 'narrow':
                return moment.weekdaysMin();
        }
    }

    public getYearName(date: Moment): string {
        return date.year().toString();
    }

    public getFirstDayOfWeek(): number {
        return 0;
    }

    public getNumDaysInMonth(date: Moment): number {
        return date.daysInMonth();
    }

    public clone(date: Moment): Moment {
        return date.clone();
    }

    public createDate(year: number, month: number, date: number): Moment {
        return moment(new Date(year, month, date));
    }

    public today(): Moment {
        return moment();
    }

    public parse(value: any, parseFormat: any): Moment {
        return moment(value, parseFormat);
    }

    public format(date: Moment, displayFormat: any): string {
        return date.format(displayFormat);
    }

    public addCalendarYears(date: Moment, years: number): Moment {
        return date.add(years, 'years');
    }

    public addCalendarMonths(date: Moment, months: number): Moment {
        return date.add(months, 'months');
    }

    public addCalendarDays(date: Moment, days: number): Moment {
        return date.add(days, 'days');
    }

    public toIso8601(date: Moment): string {
        return date.toISOString();
    }

    public isDateInstance(obj: any): boolean {
        return moment.isDate(obj);
    }

    public isValid(date: Moment): boolean {
        return date.isValid();
    }

    public invalid(): Moment {
        return moment.invalid();
    }
}