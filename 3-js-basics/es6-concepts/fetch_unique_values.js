// fetching unique values from an array
// we use set to make array into unique values
// ... is a spread operator
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast'
  },
  {
    name: 'burger',
    category: 'lunch'
  },
  {
    name: 'steak',
    category: 'dinner'
  },
  {
    name: 'bacon',
    category: 'breakfast'
  },
  {
    name: 'eggs',
    category: 'breakfast'
  },
  {
    name: 'pasta',
    category: 'dinner'
  },
];

const categories = ['all',...new Set(menu.map((item) => item.category))];
console.log(categories);