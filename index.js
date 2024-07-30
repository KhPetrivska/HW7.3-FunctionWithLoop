'use strict';

//debugger; 

function getValidatedInput (){
const input = prompt('Enter a number that is no less than 100.');
if (!input?.trim()){
    alert ('Your input is canceled or empty.');
    return null;
}
return input;
}


function iterateInput (iterationsAmount){
    for (let i=1; i <= iterationsAmount; i++){
    const userInput = getValidatedInput();
    if (userInput === null) {
    return;
    }
    if (+userInput < 100 && i < iterationsAmount){
        alert('The number has to be no less than 100. Please try again.');
    }else{
        console.log(userInput)
        return userInput;
    }
    }
}

const result = iterateInput(10)

