// Map Method
// always returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer'
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss!'
  },
];

const ages = people.map(person => person.age);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20
  }
});

console.log(newPeople);