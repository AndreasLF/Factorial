var result1; //declaring variable for result1 and calcTime1 divs


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
function trackChange1(value) { 
    
    var input1 = parseInt(value) || 0;   //This parses the value to an integer. If parseInt(), does not retrieve anything input1 becomes 0.
    result1.innerHTML = input1 + "! = " + calcFactorial(input1); //changes the text inside the result1 div to the calculated result    
}


/*
* This function calculates the factorial of a number by recursion
*
* param numb is the number which the factorial is calculated from
* returns the calculated factorial
*/    
function calcFactorial(numb) {
 
    return Math.sqrt(2*Math.PI)*Math.pow(numb,numb+(1/2))*Math.pow(Math.E,-numb); //the calculated factorial is returned
     
    
}
