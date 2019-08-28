// Code your solution in this file!
const feetPerBlock = 264;
const hqBlock = 42;

function distanceFromHqInBlocks(block) {
  let result;
  if (block > hqBlock) {
    result = block - hqBlock;
  }
  return result;
}