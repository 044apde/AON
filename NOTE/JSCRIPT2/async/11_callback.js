'use strict';

// JavaScipt is synchronous
// Execute the code in order after hoisting
// hoisting: var, function, declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
} // hoisted to the top when run 

printImmediately(() => console.log('hello')); 

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} // hoisted to the top when run 

printWithDelay(() => console.log('async callback'), 2000);