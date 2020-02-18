const numbers = [33, 45, 23, 5, 99, 44, 88, 53, 101, 85];

function ghostPassword(numbers) {
  return numbers
    .toString()
    .split(",")
    .reverse()
    .join(" ");
}

// There is a ghost trapped in the toilets at the top of the Custard Factory and he needs the right numbers to escape the building.
// They have been given an array of numbers, which they need to alter to strings and reverse the number order. Commas also need to be removed.
// E.g [33, 45, 23, 5] would become "5 23 45 33"

//Final output should be "85 101 53 88 44 99 5 23 45 33"

module.exports = {
  ghostPassword
};
