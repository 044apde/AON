//Nullish coalescing operator
// Bad Code
function printMessage(text){
    let message = text;
    if (text ==null || text == undefined){
        message = 'Nothing to display';
    }
    console.log(message);
}

//Good Code
function printMessage(text){
    const message = text ?? 'Nothing to display';
}

//Default parameter is only for undefined
function printMessage (text = 'Nothing to display'){
    console.log(text);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
printMessage(0);
