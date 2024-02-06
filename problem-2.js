function matchFinder(string1, string2){
  if(typeof string1 !=='string' || typeof string2 !=='string'){
    return "Please specify string as input parameter"
  }
  const result = string1.includes(string2);

  return result;
} 

console.log(matchFinder("john Doe","ohn"));
// console.log(matchFinder("javaScript", "code"));
// console.log(matchFinder("Pater Parker","pen"));
