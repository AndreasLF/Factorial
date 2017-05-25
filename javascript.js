var result1, calcTime1; //declaring variables for result1 and calcTime1 divs


/*
* This function runs when <body> is loaded
*/
function onLoad() { 
    result1 = document.getElementById("result1");   //stores the result element
    calcTime1 = document.getElementById("calcTime1"); //stores the calctime element
}


/*
* This function runs, when a button is released on the keyboard. 
* I have chosen this option to automatically update the result while typing
*
* param value is the value retrieved from the input field
*/
function trackChange1(value){ 
    
    var input1 = parseInt(value) || 0;   //This parses the value to an integer. If parseInt(), does not retrieve anything input1 becomes 0.
    
    var t0 = performance.now(); //stores a timestamp
    
    result1.innerHTML = input1 + "! = " + calcFactorial(input1); //changes the text inside the result1 div to the calculated result
    
    var t1 = performance.now(); //stores af timestamp
    
    calcTime1.innerHTML= "calculation time: " + (t1-t0) + " ms"; //calculates the difference between the 'before' timestamp and the 'after' timestamp and displays it in the calcTime1 div
}

/*
* This function calculates the factorial of a number by iteration
*
* param numb is the number which the factorial is calculated from
* returns the calculated factorial
*/

function calcFactorial(numb) {
    
    var factorial = 1; //the beginning number 1 is stored in a variable
    for(var i = numb; i > 1; i--){ //This loop runs as long as i (numb) is bigger than 1. i is decremented by 1 and therefore every number below numb (including numb) is multiplied
        factorial *= i; //factorial is equal to fi times iteslf
    }
    
    return factorial; //factorial is returned
     
}
