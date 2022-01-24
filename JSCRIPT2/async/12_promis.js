'use strinct';

// Promise is a Javascript object for asynchronous opertaion.
// state: pending -> fullfilled or rejected 
// Producer vs Consumer 

// 1. Producer 
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) =>{
    // doing something heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. ConsumersL then, catch, fianlly
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, rect) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => Egg`), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => food`), 1000);
    });

console.clear();

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
    




