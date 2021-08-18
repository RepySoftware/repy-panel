import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

    transform(value: string) {
        return value ? moment(value).fromNow() : '-';
    }

}