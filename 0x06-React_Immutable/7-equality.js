import { is } from 'immutable';

function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

// Example usage
const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

const result = areMapsEqual(map1, map2);
console.log(result); // Should output: true
