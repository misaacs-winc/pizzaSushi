const newPaint = function (item) {
    console.log('The wall should be painted ' + item);
}

newPaint("green");

// Calling the function with the same argument the second time
newPaint("green");

// with a different argument
newPaint("brown");

//Calling the function without an argument. Expected result: 'underfined'
newPaint();

//Mutiple arguments
const newLook = function (item1, item2) {
    console.log("The south-east wall color should be changed from " + item1 + " to " + item2);
}

newLook("grey", "blue");

//Checing to see if the order of the argument matters. Expected result: The position determines which argument is called first
newLook("blue", "grey");

//Switch argument in the function definition
const newerLook = function (item2, item1) {
    console.log("The south-east wall color should be changed from " + item1 + " to " + item2);
}

//Change order of function defination and when calling argument
newerLook("blue", "grey");


