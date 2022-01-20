/* const num =1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num1, num2){
    return num1 + num2;
}

const sum = add(3,4);
*/

function add(num1, num2){
    return num1 + num2;
}

function divide(num1, num2){
    return num1/num2;
}

function surprise(operator){
    const result = operator(2,3); //add(2,3)
    console.log(result);
}

surprise(add);
surprise(divide);

//false : 0 ,-0, '', null, undefined
//true: -1, 'hello', 'false'
let num = 9; //undefined
if(num){
    console.log('true!');
}else {
    console.log('false!');
}

num && console.log(num);

class Counter{
    constructor(){
        this.counter = 0;
    }
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            console.log('yo!');
        }
    }
}
const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
