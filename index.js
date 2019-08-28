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

function distanceTravelledInFeet (startBlock, endBlock) {
  let result;
  if (startBlock > endBlock) {
    result = (startBlock - endBlock) * feetPerBlock;
  }
  else if (endBlock > startBlock) {
    result = (endBlock - startBlock) * feetPerBlock;
  }
  return result;
}

function calculatesFarePrice(startBlock, endBlock) {
  let result;
  if (distanceTravelledInFeet(startBlock, endBlock) <= 400) {
    result = 0;
  }
}