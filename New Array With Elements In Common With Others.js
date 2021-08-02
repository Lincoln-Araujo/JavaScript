// This code will compare two arrays and return a new one with the elements that the others have in common

const returningNewArray = (array1,array2) => {
  const newArray = array1.filter(element => array2.includes(element));
  return newArray;
}

// example

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(returningNewArray(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
