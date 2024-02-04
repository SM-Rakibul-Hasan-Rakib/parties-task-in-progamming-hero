function evenAverage(numbers) {
  const evens = [];
  //even number
  for(const number of numbers){
    if(number % 2 ===0){
      evens.push(number);
      console.log(number);
    }
  }
  let sum = 0;
  for (const number of evens){
    sum = sum + evens;
  }
  const count  = evens.length;
  console.log(count, sum);
  const avg = sum / count;
  return avg;
}

const numbers =  [100, 12, 28, 55, 71, 96,  900, 112];
const avg = evenAverage(numbers);
console.log('Average of the even number :', avg);