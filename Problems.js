////////////////////////////////////////// Problem 1 //////////////////////////////////////////



const sum = sumArray([1, 2, 3, 4, 5]);

function sumArray(array) {
    let sum = 0;
  
    array.forEach(function (number) {
      sum += number;
    });
  
    return sum;
  }

  console.log("Sum of the array elements:", sum);



////////////////////////////////////////// Problem 2 //////////////////////////////////////////



const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);

function findMaxNumber(max){
    let maxNumber=0;

    max.forEach(function (number){
        if (number > maxNumber)
        maxNumber=number;
    });

    return maxNumber;
}

console.log("Maximum Number is:", maxNumber);



////////////////////////////////////////// Problem 3 //////////////////////////////////////////



const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);

function filterOddNumbers(odd){
    let newArray=[];

    odd.forEach(function (number){
        if (number%2 !== 0)
        newArray.push(number);
    });

    return newArray;
}

console.log("Odd Array is:", oddNumbers);



////////////////////////////////////////// Problem 4 //////////////////////////////////////////



const isPalindromeResult = "radar";
const isNonPalindromeResult = "hello";

function isPalindrome(str) {

    const charArray = str.split('');
  
    let isPalindrome = true;
  
    charArray.forEach(function (char, index) {

      if (char !== charArray[charArray.length    - 1 - index]) {
        isPalindrome = false;
      }
    });
  
    return isPalindrome;
  }
  
  
  console.log(isPalindrome(isPalindromeResult));
  console.log(isPalindrome(isNonPalindromeResult));



////////////////////////////////////////// Problem 5 //////////////////////////////////////////



const findMissingNumber = (arr) => {
    const n = arr.length + 1;
  
    let expected = 0;
    let actual = 0;
  
    for (let num = 1; num <= n; num++) {
      expected += num;
    }
  
    arr.forEach((num) => {
      actual += num;
    });
  
    const missingNumber = expected - actual;
  
    return missingNumber;
  };
  
  const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);

  console.log(missingNumber);
  


////////////////////////////////////////// Problem 6 //////////////////////////////////////////


function findDuplicates(arr) {
    const duplicateNumbers = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicateNumbers.includes(arr[i])) {
          duplicateNumbers.push(arr[i]);
        }
      }
    }
  
    return duplicateNumbers;
  }
  
  // Example usage:
  const duplicateNumbers = [1, 2, 3, 2, 4, 5, 4, 6];
  const duplicates = findDuplicates(duplicateNumbers);
  
  console.log("Duplicate Numbers:", duplicates);