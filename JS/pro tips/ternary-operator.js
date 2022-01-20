//Ternary Operator
// Bad Code
function getResult(score) {
    let result;
    if (score > 5){
        result = 'thumbs up';
    } else if (score <= 5){
        result = 'thumbs down';
    }
    return result;
}

// Good Code
function getResult(score){
    return score > 5 ? 'tumbs up' : 'thumbs down';
}