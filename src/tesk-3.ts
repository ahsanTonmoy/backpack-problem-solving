// Step 1: Define individual functions
const square = (n: number): number => n * n;
const double = (n: number): number => n * 2;
const addFive = (n: number): number => n + 5;

// Step 2: Compose the functions
const processNumber = (n: number): number => {
  return addFive(double(square(n)));
};

// Step 3: Test the composed function
const test = processNumber(3); // (3^2) = 9 → 9*2 = 18 → 18+5 = 23
console.log(test); // Output: 23
