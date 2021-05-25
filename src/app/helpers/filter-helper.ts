export abstract class HttpQueryParamsHelper {

    public static objectToParams(obj: any): { [key: string]: string } {

        let newObj = {};

        Object.entries(obj)
            .filter(x => x[1] !== undefined && x[1] !== null)
            .forEach(x => {
                newObj[x[0]] = Array.isArray(x[1]) ? x[1].join(',') : String(x[1])
            });

        return newObj;
    }
}