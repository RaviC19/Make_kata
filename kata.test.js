const { ghostPassword } = require("./kata.js");

test("checking order of numbers is correct", () => {
  const actual = ghostPassword("85 101 53 88 44 99 5 23 45 33");
  const expected = "85 101 53 88 44 99 5 23 45 33";
  expect(actual).toBe(expected);
});
