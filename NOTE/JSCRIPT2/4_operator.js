// 1.String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric oprators 
console.log(1 + 1); // add
console.log(1 - 1); // substract 
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3.Incremnet and decrement operators 
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, count : ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, count : ${counter}`);

// 4.Assignment operators
let x = 3;
let y = 6;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6.Logical oprators: || , &&, ! 
const value1 = false;
const value2 = 4 < 2;

// || (or), find the first truthly value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log("time");
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler 
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined); // ture
console.log(null === undefined); // false 

// 8. Conditional operator: if
// if, else if, else 
const name = 'df';
if(name == 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkonwn');
}

// 9. Ternary oprator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. lOOPS
// while loop, while the condition is truthly,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// break, continue
// Q1. 

