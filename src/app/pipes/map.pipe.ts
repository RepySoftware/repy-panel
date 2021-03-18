import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'map'
})
export class MapPipe implements PipeTransform {

    transform(value: any[], property?: string, separator: string = ', ') {
        return value.map(x => {
            if (property) return x[property];
            else return x;
        }).join(separator);
    }

}