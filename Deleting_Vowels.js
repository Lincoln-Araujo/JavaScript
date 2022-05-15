// this code will take off all the vowels of a string

function disemvowel(str) {
  const vowels = ['a','e','i','o','u'];
  
  let arrayStr = str.split('');
  
  const upper = vowels.map(element => {
    return element.toUpperCase();
  });
  
  let newArr = []
  
  arrayStr.filter(letter => {!vowels.includes(letter) && !upper.includes(letter) ? newArr.push(letter) : letter++ })
  
  let intersection = newArr.join('');
  
  return intersection;
}

console.log(disemvowel("hI my name is jon"));
// the result will be: 'h my nm s jn'

// this function can work too

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("hI my name is jon"));
// the result will be: 'h my nm s jn'
