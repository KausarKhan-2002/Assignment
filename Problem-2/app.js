// Function to generate first 'x' odd numbers
function generateOddSeries(x) {
  const result = [];
  let num = 1;

  for (let i = 0; i < x; i++) {
    result.push(num);  // add current odd number to result
    num += 2;          // next odd number
  }

  return result;
}

// Example usage:
const a = 4;
console.log("Odd Series:", generateOddSeries(a)); // Output: [1, 3, 5, 7]