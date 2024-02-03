function processNumber(number) {
  if(number % 2 === 0) {
    //if thr number is even, devide it by 2
    return number / 2;
  } else {
    return number * 2;
  }
}

//Example usage:
const resultForEven = processNumber(8);
console.log(resultForEven);

const resultForOdd = processNumber(5);
console.log(resultForOdd);
