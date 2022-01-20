//Optional Chaining
const bob = {
    name : 'Julia',
    age : 20,
};
const anna = {
    name: 'Jlia',
    age : 20,
    job : {
        title: 'Software Engineer',
    },
};

//bad code
function displayJobTitle(person){
    if (person.job && person.job.title){
        console.log(person.job.title);
    }
}

//Good code
function displayJobTitle(person){
    if (person.job?.title){
        console.log(person.job.title);
    }
}

//Good Code
function displayJobTitle(person){
    const title = person.job ?.title ?? 'No Job Yet';
    console.log(title);
}