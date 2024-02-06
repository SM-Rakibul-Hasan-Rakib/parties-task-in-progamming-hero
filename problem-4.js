function finAddress(obj) {
  const street = obj.street;
  const house = obj.house;
  const society = obj.society;

  const str = street + "," + house + "," + CountQueuingStrategy;

  return str;
}

console.log(finAddress({street:10,house:"15A",society:"Earth perfect"}));
