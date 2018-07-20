
function lowerCaseDrivers(array) {
	return array.map(function(listItem) {
		return listItem.toLowerCase()
	})
}

function nameToAttributes(arrayOfDrivers) {
	return arrayOfDrivers.map(function(driver) {
		driverArray = driver.split(" ")
		return {firstName: driverArray[0], lastName: driverArray[1]}
	})
}

function attributesToPhrase(arrayOfDrivers) {
	return arrayOfDrivers.map(function(driver) {
		return `${driver.name}` + " is from " + `${driver.hometown}`
	})
}