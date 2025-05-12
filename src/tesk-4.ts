function getMaxValue(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const nums = [5, 12, 8, 21, 3];
const max = getMaxValue(nums);
console.log(max);
