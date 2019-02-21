var screen = document.getElementById("display");

var values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var operators = ["+", "-", "/", "*", "=", "."]

function number(x){
 
    screen.innerHTML = screen.innerHTML + values[x];
    
    
}

function opt(y){
 
    screen.innerHTML = screen.innerHTML + operators[y];
    
    
}

function operation(){
    screen.innerHTML=eval(screen.innerHTML);
    console.log("pushed")
}