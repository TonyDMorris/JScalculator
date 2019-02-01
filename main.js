//create initial arrays to hold the input digits and an undefined variable for the sign
//arrays chosen to make use of the push method 
let inputValueOne = [];
let inputValueTwo = [];
let signValue;
document.getElementById("display").innerText = "0";

//function for handling the addition of new digits to the array and displaying them on screen
function addDigits(digit) {
    inputValueOne.push(digit)
    document.getElementById("display").innerText = inputValueOne.join("");
}
//special case function for adding decimals to prevent multiple decimals from being pushed
function addDecimal() {
    if (!inputValueOne.join("").match(/\./g)) {
        inputValueOne.push(".")
        document.getElementById("display").innerText = inputValueOne.join("");
    }
}

function signHandler(sign) {
    //checks if a sign is already in place as to avoid nullifying the inputValueOne
    if (!signValue) {
        //attributes the apropriate sign to the variable
        signValue = sign;
        document.getElementById("sign").innerText = signValue
        //transfer the first value into the second variable so that we can reuse the same function to build the second number
        inputValueTwo = inputValueOne;
        //reset the first varible to its initial state
        inputValueOne = [];
        //update the screen
        document.getElementById("display").innerText = "0";
    }
    //if the user clicks multiple diffrent signs this will simply reasign signValue to the most recently clicked
    else {
        signValue = sign;
        document.getElementById("sign").innerText = signValue
    }
}

function equals() {

    let trueValueOne = parseFloat(inputValueTwo.join(""))
    let trueValueTwo = parseFloat(inputValueOne.join(""))

    if (signValue == "+") {
        document.getElementById("display").innerText = trueValueOne + trueValueTwo
    }
    if (signValue == "-") {
        document.getElementById("display").innerText = trueValueOne - trueValueTwo
    }
    if (signValue == "x") {
        document.getElementById("display").innerText = trueValueOne * trueValueTwo
    }
    if (signValue == "/") {
        document.getElementById("display").innerText = trueValueOne / trueValueTwo
    }

    //this allows user to carry out repeat operations on previously calculated numbers
    inputValueOne = document.getElementById("display").innerText.split("");
    //reset the values and the inner text of the sign div
    inputValueTwo = [];
    signValue = null;
    document.getElementById("sign").innerText = signValue



}
//brings the script back to its initial starting state
function reset() {
    signValue = null;
    document.getElementById("sign").innerText = signValue
    inputValueOne = [];
    inputValueTwo = [];
    document.getElementById("display").innerText = "0";

}