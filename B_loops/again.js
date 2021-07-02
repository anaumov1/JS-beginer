// // 1

// // Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// // print out the first five multiples of the given number. The function doesn't need to return any
// // value. It should just print to the terminal.

// let fiveMultiplesOf = function (num) {
//     for (i = 1; i <= 5; i++) {
//         console.log(i * num)
//     }
// }

// fiveMultiplesOf(7);
// // prints
// //  7
// //  14
// //  21
// //  28
// //  35

// fiveMultiplesOf(3);
// // prints
// //  3
// //  6
// //  9
// //  12
// //  15


// // 2

// // Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// // return the total sum of all whole numbers from 1 to the max, inclusive.
// //
// // For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.

// let sumUpTo = function (max) {
//     let sum = 0
//     for (i = 1; i <= max; i++) {
//         sum +=i
//     }
//     return sum
// }

// console.log(sumUpTo(4)); // 10
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(2)); // 3

// 3

// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

// let noOhs = function (str) {
//     for (i = 0; i <= str.length; i++ ) {
//         if (str[i] !== "o") {
//             console.log(str[i])
//         }
//     }
// }

// noOhs("code");
// // prints
// //  c
// //  d
// //  e

// noOhs("school");
// // prints
// //  s
// //  c
// //  h
// //  l

// 4

// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25



console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9