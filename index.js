/*1) Write a function named calculateDifference that takes two arguments and 
returns the difference between the first and second argument.*/

function calculateDifference(first, second) {
    return first - second;
}
console.log("Here Difference = ", calculateDifference(10, 5));

/*2) Write a function named isOdd that takes one argument and 
returns true if the number is odd, and false if it is not.*/

function isOdd(number) {
    if (number % 2 === 0)
        return false;
    else
        return true;
}
console.log(isOdd(5));

/*3) Write a function named findMin that takes an array of
 numbers and returns the smallest number in the array.*/

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }

    return min;
}
const a = [5, 4, 2, 20, 10, 1];
console.log(findMin(a));

/*4) Write a function named filterEvenNumbers that takes an array of numbers and 
returns a new array containing only the even numbers.*/
function filterEvenNumbers(arr) {
    let arr2 = [];

    for (number of arr) {
        if (number % 2 === 0) {
            arr2.push(number);
        }
    }
    return arr2;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(arr));

/*5) Write a function named sortArrayDescending that takes an array of numbers and 
returns a new array sorted in descending order.*/

function sortArrayDescending(ar) {

    ar.sort(function (a, b) { return b - a });
    return ar;
}
const ar1 = [40, 100, 1, 5, 25, 10];
console.log(sortArrayDescending(ar1));

/*7) Write a function named countVowels that takes a string and returns the number of 
vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.*/

function countVowels(str) {
    let ar = str.split('');
    let cnt = 0;
    for (i of ar) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U') {
            cnt++;

        }
    }

    return cnt;
}
let str = "I am Nayeem";
console.log(countVowels(str));

/*8) Write a function named findAverage that takes an array of numbers 
and returns the average of all elements.*/

function findAverage(ar2) {

  let total=0.0;
  for(x of ar2)
  {
    total+=x;
  }
  return total/ar2.length;
}
const ar2 = [40, 100, 123, 5, 25, 10];
console.log("Average =",findAverage(ar2));