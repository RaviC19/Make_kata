const numbers = [33, 45, 23, 5, 99, 44, 88, 53, 101, 85];
function ghostPassword(numbers) {
  return numbers
    .toString()
    .split(",")
    .reverse()
    .join(" ");
}

module.exports = {
  ghostPassword
};
