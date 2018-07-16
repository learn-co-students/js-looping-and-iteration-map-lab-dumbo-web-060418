// Code your solution in this file.

// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driverOne = driver.split(' ')[0];
    const driverTwo = driver.split(' ')[1];

    return { firstName: driverOne, lastName: driverTwo };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
