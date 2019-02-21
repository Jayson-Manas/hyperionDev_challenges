var screen = document.getElementById("display");
var calculator = document.getElementById("calculator")
var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var counter= 1;
var operators = ["+", "-", "/", "*", "=", "."]

// values
function number(x){
 
    screen.innerHTML = screen.innerHTML + values[x];
    
    
}

// operations
function opt(y){
 
    screen.innerHTML = screen.innerHTML + operators[y];
    
    
}

// evaluating values 
function operation(){
    screen.innerHTML=eval(screen.innerHTML);
    console.log("equal to sign pushed")
}

// hide or show calculator
function openClose(){
    if(counter>0){
        calculator.style.display = "inline";
    counter--;
        
    }else{
        calculator.style.display ="none";
        counter++;
    }

    console.log(counter);
}

// clear screen

function clearAll(){
    screen.innerHTML= "";
console.log("screen cleared")
}