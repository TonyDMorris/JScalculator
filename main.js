let inputValueOne = [];
let inputValueTwo = [];
let signValue;


function addDigits(digit){
inputValueOne.push(digit)
document.getElementById("display").innerText = inputValueOne.join("");
}

function signHandler(sign){
    if(!signValue){
    signValue = sign;
    inputValueTwo = inputValueOne;
    inputValueOne = [0];
    document.getElementById("display").innerText = inputValueOne.join("");
    }
    else{
        signValue = sign;  
    }
}

function equals(){
    switch
}