
//These buttons activate the functions

let startNumber = document.getElementById("start");
startNumber.addEventListener("click",start)

let highNumber = document.getElementById("higher");
highNumber.addEventListener("click",higher)

let lowerNumberButton = document.getElementById("lower");
lowerNumberButton.addEventListener("click",lower)

let newNumber = null;
let higherNumber = null;
let lowerNumber = null;
let showText = "";
let counter = 0;
let maxRecord = 0;

//Functions
function start(){
    //Create a new number and save it in a variable
    counter = 0;
    document.getElementById('counter').textContent= counter;
    newNumber = Math.floor(Math.random() * 25) + 1;
    //
    document.getElementById('random-number').textContent= newNumber;
    document.getElementById('result').textContent= "";
    return newNumber
}

function higher(){
    //Create a new number and save it in a variable
    higherNumber = Math.floor(Math.random() * 25) + 1;
    //show variable
    document.getElementById('random-number').textContent= higherNumber;
    //compare startNumber with highernumber and says which one is higher
    
    if (higherNumber===newNumber){
        showText = "DRAW!";
        document.getElementById('result').textContent= showText;
    }

    else if (higherNumber > newNumber){
        showText = "HIT!";
        document.getElementById('result').textContent= showText;
        counter++;
        document.getElementById('counter').textContent= counter;
    }
    
    else{
        if (counter > maxRecord){
            maxRecord = counter
            document.getElementById('max-record').textContent= maxRecord;
        }
        alert("YOU MISSED IT!! \nThe new number " + higherNumber + " is LOWER than " + newNumber)
        showText = "Try again!"
        document.getElementById('result').textContent= showText;
        document.getElementById('random-number').textContent = "0"
        document.getElementById('counter').textContent= "0"
    }
    return newNumber = higherNumber
}

function lower(){
    //Create a new number and save it in a variable
    lowerNumber = Math.floor(Math.random() * 25) + 1;
    //show variable
    document.getElementById('random-number').textContent = lowerNumber;
    

    //compare startNumber with lowerNumber and says which one is lower
    if (lowerNumber===newNumber){
        showText = "DRAW!";
        document.getElementById('result').textContent= showText;
    }

    else if (lowerNumber < newNumber){
        showText = "HIT!"
        document.getElementById('result').textContent= showText;
        counter++;
        document.getElementById('counter').textContent= counter;
    }

    else{
        if (counter > maxRecord){
            maxRecord = counter
        }
        alert("YOU MISSED IT!! \nThe new number " + lowerNumber + " is HIGHER than " + newNumber)
        showText = "Try again!"
        document.getElementById('result').textContent= showText;
        document.getElementById('random-number').textContent = "0"
        document.getElementById('counter').textContent= "0"
    }
    return newNumber = lowerNumber
}




