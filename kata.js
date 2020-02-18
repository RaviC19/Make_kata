const numbers = [33, 45, 23, 5, 99, 44, 88, 53, 101, 85];

function ghostPassword(numbers) {
  return numbers
    .toString()
    .split(",")
    .reverse()
    .join(" ");
}

//Final output should be "85 101 53 88 44 99 5 23 45 33"

module.exports = {
  ghostPassword
};
