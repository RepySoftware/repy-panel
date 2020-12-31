import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentCalendar'
})
export class MomentCalendarPipe implements PipeTransform {

    transform(value: string, format: string = 'L') {
        return moment.utc(value).local().calendar();
    }

}