// function numberSeperation(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];

//         if (num < 2) continue;

//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(num); j++) {
//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberSeperation(array));



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = [];
// for (let i = 0; i < array.length; i++) {

//     newArray.push(array[i] ** 2)
// }

// console.log(newArray);


// function rotateArray(arr) {
//     if (arr.length === 0) return arr;
//     const lastElement = arr.pop();  
//     arr.unshift(lastElement);       
//     return arr;
// }


// const array = [1, 2, 3, 4];
// const rotatedArray = rotateArray(array);
// console.log(rotatedArray);



// function findLongLength(arr) {
//     let longest = [];
//     let current = [arr[0]]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] == arr[i - 1] + 1) {
//             current.push(arr[i]);
//         } else if (arr[i] != arr[i - 1]) {
//             if (current.length > longest.length) {
//                 longest = current;
//             }
//             current = [arr[i]];
//         }
//     }

//     if (current.length > longest.length) {
//         longest = current;
//     }
    
//     console.log(longest);
// }

// findLongLength([1, 2, 3, 5, 6, 7, 8])


