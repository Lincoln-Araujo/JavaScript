// stack is a way to add or take off some element from the end/top of an array 
// we can use the methods PUSH and POP for this
// PUSH: it puts an element in the end of some array
// POP: it takes an element from the end of an array

/* Reverse Array */

// this function inverts the order of an array

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); // it logs: kcatS tpircSavaJ
