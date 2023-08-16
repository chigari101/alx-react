import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    if (Map.isMap(object)) {
        return object.getIn(array, undefined);
    } else if (typeof object === 'object') {
        const [key, ...rest] = array;
        return accessImmutableObject(object[key], rest);
    }
    return undefined;
}
