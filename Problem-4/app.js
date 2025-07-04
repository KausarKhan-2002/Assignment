// Function to count how many numbers in the array are divisible by 1 through 9
function countMultiples(arr) {
  const result = {};

  // Loop from 1 to 9
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }

  return result;
}

// Example usage:
const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(numbers));

/*
Expected Output:
{
  1: 11,
  2: 8,
  3: 4,
  4: 4,
  5: 3,
  6: 2,
  7: 0,
  8: 1,
  9: 1
}
*/