//Cherrell Stroud 9/14/2013 Personal Expression
//How much laundry detergent is left in the container after washing clothes for a week?

//Givens listed below:

var d = 500; //the amount of detergent in a full container at the start of the week
var l = 22; // the number of laundry loads washed during the week.
var u = 10; // the fuild ounces required to was a load of clothes. 
var text = "fluid ounces remaining after washing clothes for one week "// the dialog for the remaining amount of fuild onces in the full container.

d -= (l * u); // the amount of washed loads is multiplied by the amount of detergent required per load. The amount is subtracted from the full container. 

var answer = String(d) + " " +String(text)// code written so that the string will appear the correct way in the log

console.log(answer)//the answer to the question will be in the log including the wording after to help clarify the answer. 