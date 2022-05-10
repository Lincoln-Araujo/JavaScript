/* we have an object that we wish to organize it in a new obj containing 
just keys that aren't objcets and maintaining the original order */
const obj = {
    a: 1,
    b: "hello",c: {
      d: "world"
    },
    e: {
      f: {
        g: 100
      }
    }
  };

/* an empty obj to receive the data*/
const newObj = {};

/* recursive function that iterates the object receiveid as parameter 
and gets just those keys that aren't objects to put in a new object*/
  function organizingObj (obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            newObj[key] = obj[key];
        } else {
            organizingObj(obj[key]);
        }
    }
    return newObj;
  }

  console.log(organizingObj(obj));
/* result: { a: 1, b: 'hello', d: 'world', g: 100 } */
