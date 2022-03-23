// Code your solution in this file!

const distanceFromHqInBlocks = (blocks) =>{
//calculates the difference between 42nd street and your location
 return (Math.abs(42 - blocks))
}

const distanceFromHqInFeet = (blocks) => {
//1 block = 264 feet
 let blockies = distanceFromHqInBlocks(blocks)
return blockies * 264 
}
//we can now invoke blockies to give us the distance between the blocks in feet 

const distanceTravelledInFeet = (start, destination) => {
//distanceFromHqInBlocks() tells us the distance between the start and destination in blocks
//distanceFromHqInFeet() tells us distance between the start and destination in feet
//this function will tell us the amount of feet it takes to get from start TO destination)
    return (Math.abs((destination - start) * 264))
//42 - 8
}

const calculatesFarePrice = (start, destination) => {
// this function is supposed to make the first 400 feet free
// fare price = distanceTravelledInFeet(start, destination) * 2 

  if ((`${start} - ${destination}` * 264) <= 400 ){
    return 0
 }
  if (distanceTravelledInFeet(`${start}, ${destination}`)> 400 && 
    (distanceTravelledInFeet(`${start}, ${destination}`) <= 2000 )){
    return (distanceTravelledInFeet(`${start}, ${destination}`) * 0.02) - 8 ;
  }
  // multiplying by 264 is blocks in feet
 // multiplying by 0.02 is the fare per feet
}
