//This problem is in regards to the call center I work at.
// How many phone calls do I take throughout the work day?
//Givens

var minutes = [20,60, 8,] // first number is the average handle time of each call, second is the amount of minutes in an hour, third is the amount of hours worked per shift.

var total = (minutes[0] / minutes[1]) * minutes[2]; //this expression is the amount of minutes in an hour are divided by 20 to find out how many calls an hour. That total is multiplied by 8 for the amount of hours in a shift.  

var text = "the amount of calls I take per work day"

var answer = String(total) + " " + String(text);

console.log(answer); //the total of the express is listed here in the log 

