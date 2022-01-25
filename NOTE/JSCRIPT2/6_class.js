'use strict';
// object-oriented programming
// class: template 
// Javascript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance 

// 1. Class declarations 
class Person {

    // constructor
    constructor(name, age) {
        
        // field 
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 28);
ellie.speak();


// 2. Getter and setters 
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('steve', 'job', 28);
console.log(user1.age); 

// 3. Fields (public, private)
// Too soon!
class Experiment {
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.privateField);
console.log(experiment.publicField);

// 4. Static properties and methods 
// Too soon!
class Article {
    static publisher = 'KKSHIN044';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }

}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);


// 5. Inheritance 
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of `);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        console.log(`drawing ${this.color} color of triangle`);
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triagnle = new Triangle(20, 20, 'red');
triagnle.draw();
console.log(triagnle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triagnle instanceof Rectangle);
console.log(triagnle instanceof Triangle);
console.log(triagnle instanceof Shape);
console.log(triagnle instanceof Object);
console.log(triagnle.toString());
