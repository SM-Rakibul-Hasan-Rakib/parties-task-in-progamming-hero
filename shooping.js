const products = [
  { name: "Shampo", price: 300, quantity:2},
  { name: "Chiruni", price: 100, quantity:3},
  { name: "Shirt", price: 700 ,quantity:5},
  { name: "pant", price: 1200 , quantity:4},
]; 


function cardTotal(products){
  const total = 0;
  for(const product of products){
    const productCost = product.price * product.quantity;
    total = total + productCost;
  }
  return total;
}

const ShoopingCost = cardTotal(products);
console.log(ShoopingCost);