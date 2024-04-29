const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length ; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multi = 1;
  for (let i = 0; i < array.length ; i++){
    multi *= array[i];
  }
  return multi;
};

const power = function(num,power) {
	let result = 1;
  for (let i = 0; i < power; i++){
    result *= num;
  }
  return result;

};

const factorial = function(num) {
  let factorial = 1;
	for (let i = num; i >= 1; i--){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
