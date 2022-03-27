//Immediately Invoked Function Expression
//syntax
(function() {
    console.log('Immediately Invoked Function Expression');
})();

//example
(function(a,b){
    return a + b;
})(10,20);


//HOISTING
//Hoisting is JavaScripts default behaviour of moving variables and function declarations to the top of the current scope before code execution.
 
//Variable Hoisting
var x = 60;
console.log(age); // Prints: undefined
var age;

//Function Hoisting

calculateAge(1996);

function calculateAge(year) {
  console.log(2000-year);  // Prints:4
}
