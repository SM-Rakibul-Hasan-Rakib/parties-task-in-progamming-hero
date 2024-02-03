//ignore this one 
function inchToFeet(inch) {
  const feeFrench = inch / 12;
  const feeNumber = parseInt(feeFrench);
  const inRemaining =inch % 12;
  const result = feeNumber + ' ft' + inRemaining + ' inch';
  return result;
}
const rakib = inchToFeet(75);
console.log(rakib);