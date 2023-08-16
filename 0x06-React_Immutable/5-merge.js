import { List, Map } from 'immutable';

function concatElements(page1, page2) {
    return List(page1).concat(page2);
}

function mergeElements(page1, page2) {
    const mergedMap = Map(page1).merge(page2);
    return List(mergedMap.values());
}

export { concatElements, mergeElements };
