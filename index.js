function lowerCaseDrivers(drivers){
  return drivers.map( function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers){
  return drivers.map( function(driver){
    newDriver = driver.split(" ");
    return Object.assign({}, { firstName: newDriver[0], lastName: newDriver[1] });
  });
}

function attributesToPhrase(drivers){
  return drivers.map( function(driver){
    return `${driver["name"]} is from ${driver["hometown"]}`;
  })
}
