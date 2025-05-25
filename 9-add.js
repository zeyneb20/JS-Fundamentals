// function add that takes two arguments and returns their sum
function add(a, b) {
  return a + b;
}

// get command line arguments (skip first two)
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// convert arguments to numbers (integers)
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// check if both are numbers, otherwise result will be NaN
// add() will add two numbers
const result = add(num1, num2);

// print the result (NaN if inputs missing or invalid)
console.log(result);
