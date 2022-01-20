// async & await
// clear style of using promise :)
 'use strict';
// 1. async
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple =await applePromise();
    const banana = await bananaPromise();    
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);