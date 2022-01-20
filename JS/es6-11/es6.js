'use strict';
{
    const ellie1 = {
        name : 'Ellie',
        age : '18',
    };

    const name = 'Ellie';
    const age = '18';

    //bad
    const ellie2 = {
        name: name,
        age : age,
    };

    //good
    const ellie3 ={
        name,
        age,
    };
}

{
    //object
    const student = {
        name :'Anna',
        level : 1,
    };
     
    // bad
    {
        const name = student.name;
        const level = student.level;
        console.log(name,level);
    }

    //good
    {
        const { name, level} = student;
        console.log(name, level);

        const { name : studentName, level : studentLevel} = student;
        console.log(studentName, studentLevel);
    }

    //array
    const animals = ['dog', 'cat'];

    // bad
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    
    //good
    {
    const [first, second] =animals;
    console.log(first, second);
    }
}
{
    const obj1 = { key : 'key1'};
    const obj2 = { key : 'key2'};
    const array = [obj1, obj2];

    //array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key : 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    //object copy
    const obj3 = { ...obj1};
    console.log(obj3);
}