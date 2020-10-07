
const person = {
  name: 'john'
};
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation

const items = {
  'featured-items': ['item1', 'item2']
};

console.log(items['featured-items']);
console.log(person['name']);

// another example
let appState = 'loading'

const app = {
  [appState]: true
}
console.log(app);

// example: to update a state variable dynamically
const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key,value) {
  state[key] = value
}

updateState('name', 'john');
console.log(state);