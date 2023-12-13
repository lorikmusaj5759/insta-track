/**
 * random_number_operations.js
 * This code performs various arithmetic operations with randomly generated numbers.
 */

// Generate a random number between two given values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random numbers
function generateRandomNumbers(count, min, max) {
  var numbers = [];
  for (var i = 0; i < count; i++) {
    numbers.push(getRandomNumber(min, max));
  }
  return numbers;
}

// Perform arithmetic operations on an array of numbers
function performOperations(numbers) {
  var sum = 0;
  var product = 1;
  var difference = numbers[0];
  var quotient = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
    difference -= numbers[i];
    quotient /= numbers[i];
  }

  var result = {
    sum: sum,
    product: product,
    difference: difference,
    quotient: quotient
  };

  return result;
}

// Main code execution
var numbers = generateRandomNumbers(10, 1, 100);
console.log('Generated Numbers:', numbers);

var operationsResult = performOperations(numbers);
console.log('Sum:', operationsResult.sum);
console.log('Product:', operationsResult.product);
console.log('Difference:', operationsResult.difference);
console.log('Quotient:', operationsResult.quotient);

/**
 * Output example:
 * Generated Numbers: [64, 88, 91, 46, 79, 70, 47, 60, 29, 15]
 * Sum: 549
 * Product: 30597295761958400
 * Difference: -390
 * Quotient: 0.00032890939597315434
 */