// Code your solution in this file.
function lowerCaseDrivers(collection) {
  const newCollection = collection.map(el => el.toLowerCase());
  return newCollection;
}

function nameToAttributes(collection) {
  const newCollection = collection.map(el => el.split())

  console.log(newCollection);
}

function nameToAttributes (collection) {
  return collection.map(function (driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(collection) {
  return collection.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
