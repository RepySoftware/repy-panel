import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'map'
})
export class MapPipe implements PipeTransform {

    transform(value: any[], property?: string, separator: string = ', ') {
        return value.map(x => {
            if (property) return property.split('.').reduce(this.index, x);
            else return x;
        }).join(separator);
    }

    private index(obj: any, prop: string) {
        return obj[prop]
    }

}