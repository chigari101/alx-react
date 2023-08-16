import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith(
        (oldVal, newVal) => (oldVal.merge && oldVal.merge(newVal)) || newVal,
        page2
    );
    return mergedMap.toList();
}

export { mergeDeeplyElements };
