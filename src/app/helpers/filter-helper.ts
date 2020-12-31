export abstract class FilterHelper {

    public static objectToFilter(obj: any): any {

        let newObj = {};

        Object.entries(obj)
            .filter(x => x[1] !== undefined && x[1] !== null)
            .forEach(x => newObj[x[0]] = String(x[1]));

        return newObj;
    }
}