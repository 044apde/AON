// 1. use strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

//2. Variable rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
let name ='ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);
//var (don't ever use this)
//값을 선언하기도 전에 할당되는 것
//var hoisting (move declaration from bottom to top)
//has no block scope (블록을 철저히 무시함)

//3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thred safety
// -reduced human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen objects (i.e. object.fresze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

//4. Variable types
//primative, single item : number, string, boolea, null, undefiedn, symbol
//object, box container
//function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + ' type: ' +typeof helloBob);

//boolean
//flase : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3< 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
ellie.age = 21;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); -> error
