// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudo-Code:
  // input: single number, which denotes the length of the array i want to output
  // output: an array of numbers that follows the fibonacci sequence, with the length of the arrary equal to the value of the input
  // Process: Create function "fibArr" that uses a for loop to iterate through the array i will create, and updates the value in every index as the sum of the previous two indexes -> i = (i-1)+(i-2). I will have a starting array with the beginging two values of the fib sequence- [1, 1], and use the for loop to build off of that. Will also include a condition to satisfy the requirement that the input number must be greater than two.


// a) Create a test with expect statements for each of the variables provided.


describe("fibArr", () => {
  it("Takes in the length of the array and returns an array with every index as the sum of the previous two", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibArr(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibArr(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// FAIL  ./code-challenges.test.js
// fibArr
//   ✕ Takes in the length of the array and returns an array with every index as the sum of the previous two (4 ms)
//   ReferenceError: fibArr is not defined


// b) Create the function that makes the test pass.

const fibArr = (num) => {
  if (num < 2){
    return "Invalid Input"
  }
  const fibStart = [1, 1]
  for(let i = 2; i < num; i++) {
    fibStart[i] = fibStart[i -1] + fibStart[i - 2]
  } 
  return fibStart
}

// PASS  ./code-challenges.test.js
// fibArr
//   ✓ Takes in the length of the array and returns an array with every index as the sum of the previous two (3 ms)








// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// PseudoCode:
  // Input: an object
  // Output: an array of numbers, organized in ascending order
  // process: I will use the object.values() class method to produce an array of the values in the key:value pairs presented in the objects, and organize the array in numerically ascending order using the sort method, (a - b) organizes them in ascending order

// a) Create a test with expect statements for each of the variables provided.

describe ("numArr", () => {
  it ("takes the values from the key value pairs and returns them in an array, sorted numerically", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(numArr(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(numArr(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })

})

// FAIL  ./code-challenges.test.js
// fibArr
//   ✓ Takes in the length of the array and returns an array with every index as the sum of the previous two (5 ms)
// numArr
//   ✕ takes the values from the key value pairs and returns them in an array, sorted numerically (3 ms)
//   ReferenceError: numArr is not defined


// b) Create the function that makes the test pass.
const numArr = (object) => {
  return Object.values(object).sort((a, b) => a - b)
}

// PASS  ./code-challenges.test.js
// fibArr
//   ✓ Takes in the length of the array and returns an array with every index as the sum of the previous two (3 ms)
// numArr
//   ✓ takes the values from the key value pairs and returns them in an array, sorted numerically (2 ms)




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// PseudoCode:
  // Input: the input will be an array of numbers
  // Output: an array of the sums of the numbers in the input array
  // Process: use .map to iterate through the array, and add the values from all of the previous indexes to the current index as the values in the new array. first, set conditional statement to account for an empty array. Then, declare a variable as the starting position, and use the addition assignment operator to add the values from the previosu indexes to the current one. 

// a) Create a test with expect statements for each of the variables provided.

describe ("addArr", () => {
  it ("sums every prior value in the array, and returns that sum in the following index", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect (addArr(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect (addArr(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect (addArr(accountTransactions3)).toEqual([])
  })
})

// FAIL  ./code-challenges.test.js
// fibArr
//   ✓ Takes in the length of the array and returns an array with every index as the sum of the previous two (5 ms)
// numArr
//   ✓ takes the values from the key value pairs and returns them in an array, sorted numerically (10 ms)
// addArr
//   ✕ sums every prior value in the array, and returns that sum in the following index (3 ms)
//   ReferenceError: addArr is not defined

// b) Create the function that makes the test pass.

const addArr = (arr) => {
  if (arr.length === 0){
    return []
  }
  let startingValue = arr[0]
  return arr.map((value, index) => {
    if (index === 0){
      return value
    }
    startingValue += value
    return startingValue
  })
}
// PASS  ./code-challenges.test.js
// fibArr
//   ✓ Takes in the length of the array and returns an array with every index as the sum of the previous two (3 ms)
// numArr
//   ✓ takes the values from the key value pairs and returns them in an array, sorted numerically (2 ms)
// addArr
//   ✓ sums every prior value in the array, and returns that sum in the following index (1 ms)
