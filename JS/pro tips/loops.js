//Looping
const items = [1,2,3,4,5,6];

//Good Code
const evens = items.filter((num) => num%2 ===0);
const multiple = evens.map((num) => num*4);
const sum = multiple.reduce((a,b) => a+b, 0);
console.log(sum);

//Good Code
const result = items
    .filter((num) => num%2 ===0)
    .map((num) => num*4)
    .reduce((a,b) => a+b,0);
console.log(result);