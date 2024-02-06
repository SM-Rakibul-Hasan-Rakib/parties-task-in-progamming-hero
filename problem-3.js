//1. make a function name as a  soMaker(){}, which will take an array as input.
//2.access the elements of the input array .
//3.if element any\\

function softMaker(arr){
  const[a,b] = arr;
  if(a<0 || b<0){
    return "invalid input"
  } 
  if(a==b){
    return "equal"
  }
  if(a > b){
    return[a,b];
  }else{
    return[b,a];
  }
}

console.log(softMaker(4,5));