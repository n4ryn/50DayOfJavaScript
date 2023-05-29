// Create a function which can convert the time input given in 12 hours format to 24 hours format

const time = "12:10AM";

const convertTo24HrsFormat = (timeText) => {
  // write code here
  const timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) hours = hours == 12 ? "0" : hours;
  else if (timeTextLower.endsWith("pm"))
    hours = hours == 12 ? hours : String(+hours + 12);

  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
};

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
