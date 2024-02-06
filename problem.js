//function will recive a parameter which will be number
//

function cubNumber(number){

if(typeof number !=='number'){
  return'please provide a number..'
}

   const result =  Math.pow(number, 3);

   //return the result
   return result;
}
console.log(cubNumber(4));