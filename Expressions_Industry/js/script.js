//This problem is in regards to the call center I work at.
// How many phone calls do I take throughout the work day?
//Givens

var minutes = [20,60, 480,] // first number is the average handle time of each call, second is the amount of minutes in an hour, third is the amount of minutes per work shift.

var total = (minutes[0] / minutes[1]) * minutes[2];

console.log(total);

