// this function receives a string as parameter
// and returns how much vowels appears 

function getCount(str) {
  let vowelsCount = 0;
  
  const vowels = ['a','e','i','o','u'];
  
  let arrayStr = str.split('');
  
  for(let letter in arrayStr){
    if (vowels.includes(arrayStr[letter])){
      vowelsCount++
    }
  }  
  return vowelsCount;
}
