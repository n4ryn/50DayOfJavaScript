// Create a function which returns reverse of given integer number

const num = -43442;

const reverseGivenInteger = (num) => {
  // write code here
  const reverseNumber =
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
  return reverseNumber;
};

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
