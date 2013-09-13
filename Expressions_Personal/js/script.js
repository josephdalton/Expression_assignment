//Cherrell Stroud 9/14/2013 Personal Expression
//How much laundry detergent is left after washing a weeks worth of clothes?

//Givens

var d = 200; //the amount of detergent in a full container at the start of the week
var l = 15; // the number of laundry loads washed during the week
var u = 4; // the amount of detergent it takes per load  
var metric = "fluid ounces remaining after washing clothes for one week "// the dialog for the remaining amount of fuild onces in the full container

d -= (l * u); // the amount of washed loads is multiplied by the amount it takes to wash per load. This amount is subtracted from the starting amount to produce the answer.

var answer = String(d) + " " +String(metric)// code written so that the string will appear the correct way in the log

console.log(answer)//the answer to the question will be in the log including the wording after to help clarify the answer. 


