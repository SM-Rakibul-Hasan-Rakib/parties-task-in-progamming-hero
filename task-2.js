// function processNumber(number){
//   if(number % 2 === 0){
//     return number / 2;
// }else {
//   return number * 2; 
// }
// }

// const resultForEven = processNumber(8);
// console.log(resultForEven);

// const resultForOdd = processNumber(5);
// console.log(resultForOdd);

//**** */
function processNumber(number){
  if(number % 2 === 0){
    return number / 10;
  } else{
    return number * 5;
  }
}

const resultForEven = processNumber(10);
console.log(resultForEven);

const resultForOdd = processNumber(10);
console.log(resultForOdd);