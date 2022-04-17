const autocorrect = input => {
  
  let newString = "";

  let textArray = input.split(" ");

  let newArray = []

  for (word of textArray) {
  
    if (word === "u" || word.includes("you") && word.length === 3 && !word.includes("youy") || word.includes("You") && word.length === 3) {
      newString = word.replace(word, "your client");
      newArray.push(newString);
    } else if ( word.includes("you.") && word.length === 4 || word === "u." ) {
      newString = word.replace(word, "your client.");
      newArray.push(newString);
    } else if ( word.includes("youu") && word.length> 3 ) {
      newString = word.replace(word, "your client");
      newArray.push(newString);
    } else {
      newArray.push(word);
    }

  }  
  
  return newArray.join(" ");
};
