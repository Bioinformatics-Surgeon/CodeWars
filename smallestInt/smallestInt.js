var summation = function(num) {
  var sum = 0;
  var adder = 0;
  for (let i = 0; i < num; i++) {
    adder = i + 1;
    sum = sum + adder;
  }
  return sum;
};

console.log(summation(2));

// best solution
function summer(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
}

console.log(summer(2));

// num comes in and is broken down into digits depending on how much digits it takes to make the digit by iteration on itself by one

// needs to loop through an array which is created from the input of the function
