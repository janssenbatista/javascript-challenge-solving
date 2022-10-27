function timeConversion(s) {
  let hour = Number.parseInt(s.substring(0, 2));
  let minute = s.substring(3, 5);
  let seconds = s.substring(6, 8);
  let clockFormat = s.substring(8, 10);
  if (clockFormat === "AM" && hour === 12) {
    hour = 0;
  }
  if (clockFormat == "PM" && hour >= 1 && hour < 12) {
    hour += 12;
  }
  return `${hour < 10 ? 0 + hour.toString() : hour}:${minute}:${seconds}`;
}

// Test
console.log(timeConversion("07:00:00PM"));
console.log(timeConversion("09:01:00AM"));
console.log(timeConversion("11:32:00PM"));
console.log(timeConversion("07:01:00AM"));
