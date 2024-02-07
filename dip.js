 function layerDiscountTotal (quantity){
  const first100price = 100;
  const second100price = 100;
  const above100price = 100;

  if(quantity <= 100){
    const total = quantity * first100price;
    return total; 
  }else if(quantity <= 200){
    const first100total = 100 * first100price;
  }
 }