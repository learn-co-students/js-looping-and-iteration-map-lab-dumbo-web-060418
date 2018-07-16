// Code your solution in this file.
 function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function (driver) {return driver.toLowerCase();});
  return newDrivers;
 }

 function splitString(string, attr1, attr2){
   const obj = {}
   const arr = string.split(" ");
   obj[attr1] = arr[0];
   obj[attr2] = arr[arr.length-1];
   return obj;
 }

 function nameToAttributes(drivers){
   const attrs = drivers.map(function (driver) {return splitString(driver, 'firstName', 'lastName');});
   return attrs;
 }

 function attributesToPhrase(drivers){
   const phrases = [];
   for (const obj of drivers){
     phrases.push(`${obj.name} is from ${obj.hometown}`);
   }
   return phrases;
 }
