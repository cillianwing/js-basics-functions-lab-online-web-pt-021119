// Code your solution in this file!
const feetPerBlock = 264;
const hqBlock = 42;

function distanceFromHqInBlocks(block) {
  let result;
  if (block > hqBlock) {
    result = block - hqBlock;
  }
  else if (block < hqBlock) {
    result = hqBlock - block;
  }
  return result;
}

function distanceFromHqInFeet(block) {
  let result; 
  result = distanceFromHqInBlocks(block) * feetPerBlock
  return result
}

function distanceTravelledInFeet () {
  
}