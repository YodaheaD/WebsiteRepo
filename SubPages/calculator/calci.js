//$(document).ready(function() { 
  $(function() { //Shorthand version of document.ready
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry='0';

    updateScreen(result);
//When button is pressed, print
    $('.button').on('click',function(evt){

    var buttonPressed= $(this).html();
    console.log(buttonPressed);
    

    if(buttonPressed === "C"){ //Clear function
        result=0;
        currentEntry='0';
    }
    else if(buttonPressed === "CE"){ //Clear Everything Function
        currentEntry='0';
    }
    else if(buttonPressed === "back"){ //Back space Pressed
        currentEntry=currentEntry.substring(0,currentEntry.length-1);//Remove one element
    }
    else if(buttonPressed === "+/-"){ //Sign change function
        currentEntry*= -1
    }
    else if(buttonPressed === '.'){ //Decimal point function
        currentEntry+='.';
    }
    else if(isNumber(buttonPressed)){
        if(currentEntry ==='0') currentEntry=buttonPressed;
        else currentEntry = currentEntry+buttonPressed; //Append Current digit entered with previous
    } else if(isOperator(buttonPressed)){
        prevEntry=  parseFloat(currentEntry);
        operation = buttonPressed; //Opeartion can be subtract,divide,multiple or add
        currentEntry = '';
    } else if(buttonPressed === "%")
    {
        currentEntry = currentEntry/100;
    }
    else if(buttonPressed === "sqrt") //Square Root function
    {
        currentEntry = Math.sqrt(currentEntry);
    } else if(buttonPressed === "1/x"){ //Inverse function
        currentEntry= 1/currentEntry;
    } else if(buttonPressed === "pi"){ //Pi fnuction, using the math library
        currentEntry= Math.PI;
    }
    else if(buttonPressed === "="){//Equal is our queue to begin the operation
        currentEntry=operate(prevEntry,currentEntry, operation);
        operation = null;
    }
    updateScreen(currentEntry); //Update curent entry after operation on
 });


});


updateScreen= function(displayValue){
    var displayValue= (displayValue.toString()); //Display the current value
    $('.screen').html(displayValue.substring(0,10)); //Display the value on html page
};

isNumber= function(value){
    return !isNaN(value);
}

isOperator = function(value){
    return value === '/' || value === '*' || value === '+' || value === '-' ; 
}


operate = function (a,b,operation){
    //COnvert to Float before operation
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a,b,operation);
    if(operation === '+') return a+b; //Addition
    if(operation === '-') return a-b; //Subtraction
    if(operation === '*') return (a*b); //Multiplication
    if(operation === '/') return a/b; //Division
}



