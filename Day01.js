// Create a function which returns a random number in the given range of values both inclusive

const randomNumberGeneratorInRange = (rangeStart, rangeEnd) => {
  // write code here
  const randomNumber =
    Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;

  return randomNumber;
};

console.log(`My random number: ${randomNumberGeneratorInRange(10, 20)}`);
