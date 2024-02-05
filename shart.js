const numbers = [300, 100, 700, 1200];

const products = [
  {name: 'Shampo', price:300},
  {name: 'Chiruni', price:100},
  {name: 'Shirt', price:700},
  {name: 'pant', price:1200},
]


function shoopingTotal( products){
  let total = 0;
  for (const product of products){
    total = total + product.price;
  }
  return total;
}

const total = shoopingTotal(products);
console.log('total ajka mara khaibo:', total);