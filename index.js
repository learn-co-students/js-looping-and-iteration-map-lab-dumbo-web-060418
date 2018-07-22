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


// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh'  },
//   { name: 'Sammy',   hometown: 'New York'    },
//   { name: 'Sally',   hometown: 'Cleveland'   },
//   { name: 'Annette', hometown: 'Los Angeles' },
//   { name: 'Bobby',   hometown: 'Tampa Bay'   }
// ];
// expect(attributesToPhrase(drivers)).to.eql([
//   'Bobby is from Pittsburgh', 'Sammy is from New York', 'Sally is from Cleveland', 'Annette is from Los Angeles', 'Bobby is from Tampa Bay'
// ]);
