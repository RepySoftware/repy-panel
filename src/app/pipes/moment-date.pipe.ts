import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

    transform(value: string, format: string = 'L') {
        return moment(value).format(format);
    }

}