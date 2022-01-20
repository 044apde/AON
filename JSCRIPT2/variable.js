// 1. Use strict added in ES5 
// use this for Valina Javascript

'use strict';

// 2. Variable 
// let (added in ES6)

let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);

// var(don't ever use this!)
// var hoisting (move declaration from bottom to top)
{
    age=4;
    console.log(age);
}
var age;

// 3. Constants 
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes 
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, iundefined, symbol
// object, box container 
// function, first-class function 
const count = 17; // integer
const size = 17.1; // decimal number 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numercia values: infinity, -infinity, Nan 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 23425425934250956925929059923489023n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!,`; // template literals (string)
console.log(`value: ${helloBob} type: ${typeof helloBob}`);

// boolean 
// false: 0, null, undefined, Nan, '' 
// true: any other value 
const canRead = true;
const test = 3 < 1; // false 
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
