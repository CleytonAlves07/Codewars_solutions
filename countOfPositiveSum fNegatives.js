/*
DESCRIPTION:
Given an array of integers.

Return an array, where the first element
 is the count of positives numbers and 
 the second element is sum of negative numbers. 
 0 is neither positive nor negative.

If the input is an empty array or is null, 
return an empty array.

Example
For input 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  if (input) {
    positive = input.reduce((acc, curr) => curr > 0 ? acc += 1 : acc, 0)
    negative = input.reduce((acc, curr) => curr < 0 ? acc += curr : acc, 0)
    if(positive === 0 && negative === 0) return []
    return ([positive, negative])
  }
  return []
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));