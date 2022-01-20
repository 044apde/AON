//Spread Syntax-Object
const item = { type : 'shirt', size : 'M'};
const detail = {price : 20, made: 'Korea', gender : 'M'};

//Bad Code
item['price'] = detail.price;

//BadCode
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

//Bad Code
const newObject2 = {
    type : item.type,
    size : item.size,
    price : detail.price,
    made : detail.made,
    gender : detail.gender,
};

//Good Code
const shirt0 = Object.assign(item, detail);

//Better Code
const shirt = {... item, ...detail};

//Spread Syntax-Array
let fruits = ['watermelon', 'peach', 'banana'];

//fruits.push('strawberry');
fruits = [...fruits, 'strawberry'];

//fruits.unshift('grape);
fruits= ['grape', ...fruits];


const fruits2 = ['melon','lemon', 'pineapple'];
let combined = fruits.concat(fruits2);
combined = [...fruits, 'cheery', ...fruits2];
