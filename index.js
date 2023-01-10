// Code your solution in this file!

  /*index.js
    distanceFromHqInBlocks()
      ✓ returns a distance in blocks
      ✓ returns a distance in blocks
      ✓ calculates distances below 42nd street
    distanceFromHqInFeet()
      1) returns a distance in feet
      2) returns a distance in feet
      3) calculates distances below 42nd street
    distanceTravelledInFeet()
      ✓ returns the distance travelled in feet
      ✓ returns a distance in feet
      ✓ returns distance when destination is below distance
    calculatesFarePrice(start, destination)
      4) gives customers a free sample
      5) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      6) charges 25 dollars for a distance over 2000 feet
      7) does not allow rides over 2500 feet 
      */

const blockFeet = 264;

function distanceFromHqInBlocks(someVal) {
    return Math.abs(42 - someVal)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function distanceInBlocks(start, dest) {
    return Math.abs(start - dest)
}

function distanceFromHqInFeet(someVal) {
    return distanceFromHqInBlocks(someVal) * blockFeet
}

function calculatesFarePrice(start, destination) {
let feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
       return 0;
    }
    else if (feet > 400 && feet < 2000) {
    return .02 * (feet - 400);
    }
    else if (feet > 2000 && feet < 2500) {
    return 25
    } else
    return 'cannot travel that far'
    }

