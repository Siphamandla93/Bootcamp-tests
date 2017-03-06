function regCheck(registrationNumber,location) {
var cars=registrationNumber.endsWith(location);
  return cars;
}
console.log(regCheck('CY189-012', 'CY'));
