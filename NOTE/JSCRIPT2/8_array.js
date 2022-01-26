"user strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end 
fruits.push('A', 'B');
console.log(fruits);

// pop: remove an item from the end 
fruits.pop();
fruits.pop();
console.log(fruits);

// Unshift: add an item to the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('a', 'b', 'c', 'd');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1,1,'5','6');
console.log(fruits);

// combline two arrays
const fruits2 = ['n', 'm'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// find the index 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('6'));

// includes
console.log(fruits.includes('9')); // false

// lastIndexOf
fruits.push('a');
console.log(fruits);
console.log(fruits.indexOf('a')); // value의 제일 처음 index 값을 return
console.log(fruits.lastIndexOf('a')); // 마지막  index 값을 return

