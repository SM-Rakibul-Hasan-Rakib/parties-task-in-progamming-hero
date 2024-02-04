 function isLeaper(year) {
  if(year % 4 ===0){
    return true;
  }else{
    return false;
  }
 }

 const islipi = isLeaper(2000);
 console.log(islipi);