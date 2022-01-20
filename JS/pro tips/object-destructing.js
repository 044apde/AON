//Object-destrucing
const person = {
    name : 'Julia',
    age : 20,
    phone :'01077777777',
};

//Bad Code
function displayPerson(person){
    displayAvartar(person.name);
    displayName(person.name);
    displayProfile([person.name, person.age]);
}

//Bad Code
function displayPerson(person){
    const name = person.name;
    const age = person.age;
    displayAvartar(name);
    displayName(name);
    displayProfile([name, age]);
}

//Good Code
function displayPerson(person){
    const { name, age }= person;
    displayAvartar(name);
    displayName(name);
    displayProfile(name,age);
}