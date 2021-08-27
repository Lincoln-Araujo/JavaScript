const _ = {

  /*
  This method returns a number that is between two bounds.
  If the provided number is less than the lower bound, so the method will return the lower bound.
  Case that number is larger than the upper bound, so the upper will be returned.
  Since the provided number is between the lower bound and upper bound, it'll be returned by this method.
  */
  clamp(number, lower, upper) {
    // using a Math.max we can find what value is bigger between provided number and lower bound
    let lowerClampedValue = Math.max(number, lower);

    // passing the previous variable as parameter, we can find the lower value between that one and the upper bound through function Math.min
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue
  },


// inRange returns a boolean value after checking if the provided number is between the requested parameters.

  inRange(number, start, end) {
    /* Checking if the 'end' parameter has been given
       If not, the 'start' parameter will be the new end parameter and we set zero as a new start parameter
    */
    if (end === undefined) {
      let newEnd = start;
      let newStart = 0;
      if (number >= newStart && number < newEnd) {
        return true;
      } else {
        return false;
      }
    } else if (number >= start && number < end) {
      return true;
      // In case the parameter start and end values have been given in the wrong position, this part of the code fixes them 
    } else if (start > end) {
      let newStart = end;
      let newEnd = start;
      if (number >= newStart && number < newEnd) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  // words method receives a sentence as string and return an array that contains every word as an element of it
  words(string) {
    // the space is what idicates the end of some word and the the start of the next
    const space = ' ';
    // using split method, we split the string into an array of substrings 
    let array = string.split(space);
    return array;
  },

  /*that method will insert blank spaces before and after a provided string
    It receives a string and length as argument, the lenght argument will define the length of the new string
    If the length equals or smaller than the provided string, the code will return the string otherwise it will calculate how many spaces will be inserted
  */
  pad(string, length) {
    if(string.length >= length) {
      return string;
    } else if (string.length < length) {
      let space = ' ';
      //finding the remaining spaces
      let spacePad = (length - string.length) / 2;
      let newString = '';
      //if the string has a even length, so the code will divide the remaining spaces equally
      if (length % 2 === 0) {
        //defining the space before and after the string according to the remaining spaces       
        let pad = space.repeat(spacePad);
        newString = `${pad}${string}${pad}`;
        return newString;
      } else {
        //in case the string has a odd lenght, the code will let the space before the string less than the space after
        let padDown = space.repeat(Math.round(spacePad - 1));
        let padUp = space.repeat(Math.round(spacePad));
        newString = `${padDown}${string}${padUp}`;
        return newString;
      }
    } else {
      return 'error';
    }
  },

  // has method return a boolean value if the provided object contains the provided key
  has(obj, key) {
    let objectArray = Object.keys(obj);
    if (objectArray.includes(key)) {
      return true;
    } else {
      return false;
    }
  },


 // this method inverts values and keys of a provided object
  invert(obj) {
    let retobj = {};
    for(let key in obj){
      retobj[obj[key]] = key;
    }
    return retobj;
  },


  //trying to know if some key in the provided object fits in the provided function 
  findKey(object, predicate) {
    for (key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined
  },


  // this method is used for to delete a certain number of elements in an array
  drop(array, num) {
    if (!num) {
      num = 1;
    }
    let copyArray = array.slice(num);
    return copyArray;
  },

  //the dropWhile method is a mix of findkey and drop methods, where an array will be returned just with the elements that satisfy the predicate function
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      if(!predicate(element, index, array)){
        return true;
      }
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  /*chunk is a method that converts a provided array into a new array of subarrays
    the size of every subarray will be defined by a provided parameter
    if the size is not provided so the standard size will be 1
  */
  chunk(array, size) {
    if (!size) {
      size = 1;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i += size) {
      let secondArray = array.slice(i, i + size);
      newArray.push(secondArray);
    }
    return newArray;
  }
};


// Do not write or modify code below this line.
module.exports = _;
