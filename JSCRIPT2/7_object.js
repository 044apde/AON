// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in JavcScripts are instances of object

// 1. Literals and properties
const obj1 = {}; // object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add propeties later
ellie.hasjob = true;
console.log(ellie.hasjob);

// can delete properties later
delete ellie.hasjob;
console.log(ellie.hasjob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printvalue(obj, key) {
    console.log(obj[key]); // obj.key: can't work 
}
printvalue(ellie, 'name');

// 3. Property value shorthand
// 4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}
const kkshin044 = new Person('kkshin044', 28);
console.log(kkshin044);

// 5. In operator: property existence check (key in obj)
console.log('name' in kkshin044);
console.log('age' in kkshin044);
console.log('random' in kkshin044); // false
console.log(ellie.random); // undefined 

// 6. for .. in cs for .. of
// for (key in obj)
for (key in kkshin044) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3, obj4 ...])
const user = { name: 'ellie', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example 
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있을 수록 우선순위가 높다. 
console.log(mixed.color);
console.log(mixed.size);