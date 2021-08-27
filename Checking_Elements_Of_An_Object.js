// This programing can help us to check if inside of some object contains some data we are interested in
// In the example below we are trying to check if all foods in an array of objects are plant based

// Example
const isTheDinnerVegan = object => {
  for (food of object) {
    if (food.source === 'plant') {
      return true;
    } else {
      return false;
    }
  } 
}

const dinner = [{name: 'hamburger', source: 'meat'}, 
                {name: 'cheese', source: 'dairy'}, 
                {name: 'ketchup', source:'plant'}, 
                {name: 'bun', source: 'plant'}, 
                {name: 'dessert twinkies', source:'unknown'}
               ];

console.log(isTheDinnerVegan(dinner))
// Should print false

