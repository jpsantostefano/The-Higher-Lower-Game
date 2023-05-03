
//Botones que activan las funciones

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
let contador = 0;
let maxRecord = 0;



//Funciones
function start(){
    //creo el numero y lo guardo en una variable
    contador = 0;
    document.getElementById('contador').textContent= contador;
    newNumber = Math.floor(Math.random() * 25) + 1;
    //muestro esa variable
    document.getElementById('random-number').textContent= newNumber;
    return newNumber
}

function higher(){
    //creo el numero y lo guardo en una variable
    higherNumber = Math.floor(Math.random() * 25) + 1;
    //muestro esa variable
    document.getElementById('random-number').textContent= higherNumber;
    //compara startNumber con highernumber y dice cual fue mas grande
    
    if (higherNumber===newNumber){
        showText = "DRAW!";
        document.getElementById('texto').textContent= showText;
    }

    else if (higherNumber > newNumber){
        showText = "ACERTASTE!";
        document.getElementById('texto').textContent= showText;
        contador++;
        document.getElementById('contador').textContent= contador;
        
    }
    
    else{
        if (contador > maxRecord){
            maxRecord = contador
            document.getElementById('max-record').textContent= maxRecord;
        }
        alert("YOU MISSED IT!! \nel nuevo numero " + higherNumber + " es menor que " + newNumber)
        showText = ":("
        document.getElementById('texto').textContent= showText;
        
    }
    
    return newNumber = higherNumber
}

function lower(){
    //creo el numero y lo guardo en una variable
    lowerNumber = Math.floor(Math.random() * 25) + 1;
    //muestro esa variable
    document.getElementById('random-number').textContent = lowerNumber;
    
    //compara startNumber con highernumber y dice cual fue mas grande
    
    if (lowerNumber===newNumber){
        showText = "DRAW!";
        document.getElementById('texto').textContent= showText;
    }

    else if (lowerNumber < newNumber){
        showText = "ACERTASTE"
        document.getElementById('texto').textContent= showText;
        contador++;
        document.getElementById('contador').textContent= contador;
        
    }

    else{
        if (contador > maxRecord){
            maxRecord = contador
        }
        alert("YOU MISSED IT!! \nel nuevo numero " + lowerNumber + " es mayor que " + newNumber)
        showText = ":("
        document.getElementById('texto').textContent= showText;
    }
    
    return newNumber = lowerNumber
}




