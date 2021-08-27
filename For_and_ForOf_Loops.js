// array of items for a shopping list
const shoppingList = ['apples','bananas','oranges','meal','chicken','toothpaste','potatoes','lettuce'];

console.log("common for loop: \n");


// example of "for loop" to print all elements of some array
for (item = 0; item < shoppingList.length; item++) {
  console.log(`- ${shoppingList[item]}`);
}

/* it must log:
  - apples
  - bananas
  - oranges
  - meal
  - chicken
  - toothpaste
  - potatoes
  - lettuce  
*/

console.log("\n")

console.log("for..of loop: \n")


// example of "for...of loop" to print all foods in shoppingList
for (food of shoppingList) {
  if (food === 'toothpaste') {
    continue;
  }
  console.log(`- ${food}`);
}

/* it must log:
  - apples
  - bananas
  - oranges
  - meal
  - chicken
  - potatoes
  - lettuce  
*/
