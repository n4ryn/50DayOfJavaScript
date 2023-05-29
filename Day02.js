// Create a function which returns a reversed string

const str = "JavaScript is awesome";

const reverseAString = (str) => {
  // write code here
  const reversedString = str.split(" ").reverse().join(" ");

  return reversedString;
};

console.log(`Reversed string of ${str} is ${reverseAString(str)}`);
