import { List } from 'immutable';

export function getListObject(array) {
  const list = List(array);
  return list;
}

export function addElementToList(list, element) {
  const newList = list.push(element);
  return newList;
}
