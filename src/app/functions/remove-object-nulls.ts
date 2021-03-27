export function removeObjectNulls(obj: any): any {

    const newObj = Object.assign(obj);

    const isArray = obj instanceof Array;

    for (var k in newObj) {
        if (newObj[k] === null) isArray ? newObj.splice(k, 1) : delete newObj[k];
        else if (typeof newObj[k] == "object") removeObjectNulls(newObj[k]);
    }

    return newObj;
}