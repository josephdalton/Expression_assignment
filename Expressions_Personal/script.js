//Personal Expression
//How much laundry detergent is left after washing a weeks worth of clothes?

//Givens

var startingDetergent = 150 fl oz; //the amount of detergent in a full container at the start of the week
var clothesLoads = 10; // the number of laundry loads washed during the week
var perLoad = 3 fl oz; // the amount of detergent it takes per load 
var remainingDetergent; // the amount of detergent remaining after the week is over. 

//the clothes loaded mulitplied by the amount of fluid ounces it will take per load will give us the total amount of detergent needed. Then the answer is then subtracted by the full amount of detergent. 

var amountRemaining = (perLoad * clothesLoads) - startingDetergent;
console.log(amountRemaining)
