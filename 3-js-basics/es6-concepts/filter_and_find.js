// Filter - returns an new array, can manipulate the size of new array (unlike map),
// returns based on condition
// Find - returns single instance (object), 
// returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
const fruits = ['orange', 'lemon', 'apple']

// filter
const youngPeople = people.filter((person) => {
  return person.age < 30
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// filter: no-match case
const seniorDevs = people.filter((person) => person.position === 'senior developer');
console.log(seniorDevs);

// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);

const lemon = fruits.find((fruit) => fruit === 'lemon')
console.log(lemon);

// find: no-match case
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// find: multiple matches case
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);