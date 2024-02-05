const heights = [65, 66, 2, 68, 72, , 78, 60, 65, 100];

function getMin(  ) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const min = getMin(heights);
fconsole.log(min);
