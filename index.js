// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
    console.log(driver)
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let name = driver.split(" ")
    return Object.assign({firstName: name[0], lastName: name[1]})
    console.log(name)
  })

}
