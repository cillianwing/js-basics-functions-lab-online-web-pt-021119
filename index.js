// Code your solution in this file!
const feetPerBlock = 264;

function distanceFromHqInBlocks(feet) {
  let result = Math.ceil(feet/feetPerBlock);
  return result;
}