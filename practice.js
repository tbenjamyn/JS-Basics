//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  var tylerCheck = function (name) {
    if (name === "tyler") {
      return "true";
    } else {
      return "false";
    } 
  }

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
  prompt("What is your name");
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var getName = function() {
  var name = prompt("What is your name");
  return name;
}

var welcome = function () {
  var ask = getName();
  alert("Welcome, " + ask);
}

welcome();

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

var adder = function (numbers) {

  for (i = 1; i < arguments.length; i++) {
    numbers += numbers;
    console.log(numbers);  
  }
  return numbers;
};

var returnValues = adder(5, 10, 15, 20, 25);

alert("The Total Number was " + returnValues);


//Next Problem



//What is the difference between arguments and parameters?

Parameters are variables/values when passed to a function
Arguments are variables/values when invoking a function

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


null = 0;

Chrome dev tools

Print the result

//Next Problem



//Create a function called myName that returns your name

var myName = function () {
  return "Thomas Tran";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = function () {
  return "Thomas Tran";
}

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
  return function () {
    return "Thomas Tran";
  };
};


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();