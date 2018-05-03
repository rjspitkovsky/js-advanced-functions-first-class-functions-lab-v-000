// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function multiplier(fare) {
    return fare * integer
  }
}

const fareDoubler = function multiplier(2)
