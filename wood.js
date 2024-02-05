// function woodQuality(chairQuality, tableQuality, bedQuality){
//   const parChairwood = 3;
//   const parTablewood = 10;
//   const parBedwood = 50;

//   const chaitTotalWood  = chairQuality * parChairwood;
//   const tableTotalWood = tableQuality * parTablewood;
//   const  bedtotalWood = tableQuality * parTablewood;

//   const totalWood =bedQuality + tableQuality +chairQuality;

//   return totalWood;
// }

// const wood = woodQuality(0, 0, 1);
// console.log('wood needed', wood);

//shart price- 500
//pant-price-500
//juta price-1000
//

// function dreesQuality(shartQuality, pantQuality, jutaQuality) {
//   const parShart = 500;
//   const parPant = 500;
//   const parJuta = 1000;

//   const totalShartPrice = shartQuality * parShart;
//   const totalPantPrice = pantQuality * parPant;
//   const totalJutaPrice = jutaQuality * parJuta;

//   const totalPrice = totalShartPrice + totalPantPrice + totalJutaPrice;
//   return totalPrice;
// }

// const total = dreesQuality(2, 2, 1);
// console.log(total);


//college fee-500;
//bus bhara- 1000;
//basa-bhara-5000;;
function totalFree(collegeFee, busFee, basaFee ){
  const  parCollege = 5000;
  const parbasaBhara= 6000;
  const parbusBhara = 5000;

  const totalCollege = collegeFee * parCollege;
  const totalbasaBhara = basaFee * parbasaBhara;
  const totalbusBhara = busFee * parbusBhara;

  const totalAmount = totalCollege + totalbasaBhara + totalbusBhara;

  return totalAmount;
}

const total = totalFree(4,6,1);
console.log('par month totat amount fot money:', total);