import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map = Map(page1);
  const deep = map.mergeDeep(page2);
  return deep;
}
