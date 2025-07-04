// Function to generate odd number series based on input value
function customOddSeries(a) {
  const count = a % 2 === 0 ? a - 1 : a;  // If even, subtract 1
  const result = [];

  let num = 1;
  for (let i = 0; i < count; i++) {
    result.push(num);
    num += 2;
  }

  return result;
}

// Example usage:
console.log("Input: 1 =>", customOddSeries(1));  // [1]
console.log("Input: 2 =>", customOddSeries(2));  // [1]
console.log("Input: 3 =>", customOddSeries(3));  // [1, 3, 5]
console.log("Input: 4 =>", customOddSeries(4));  // [1, 3, 5]
console.log("Input: 5 =>", customOddSeries(5));  // [1, 3, 5, 7, 9]