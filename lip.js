function isleaper(year) {
  if (year % 4 === 0 ) {
    return true;
  }
  else {
    return false;
  }
}
const islip = isleaper(2050);
console.log(islip);