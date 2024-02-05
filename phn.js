const phones = [
  { name: "Samsung", price: 30000, camera: "12mp", color: "black" },
  { name: "Xoami", price: 20000, camera: "12mp", color: "black" },
  { name: "oppo", price: 20000, camera: "12mp", color: "black" },
  { name: "I_phone", price: 100000, camera: "12mp", color: "black" },
  { name: "HTC", price: 31000, camera: "12mp", color: "black" },
]

  function getPhones(phones){
    const max = phones[0];
    for(const phone of phones){
    if(phone.price < max.phone)  {
      max = phone;
    } 
    }
    return max;
  }

const chep = getPhones(phones);
console.log(phones);

// function getCheapestPhones(phones) {
//   const min = phones[0];
//   for(const phone of phones){
//     if(phone < min){
//       min = phone;
//     }
//   }
//   return min;
// }

// const cheap = getCheapestPhones(phones);
// console.log(cheap);
