const { test, expect } = require("@jest/globals");
const feedback = require("./wordle");

// Check to see that the function runs when two words of the same length are given
test("function runs when both words are the same length", () => {
  expect(feedback("cykla", "hallå")).toHaveLength(5);
});

// Check that same one letter word gives "correct" result
test("same letter at same place gives correct result", () => {
  const array = { id: 0, letter: "a", result: "correct" };
  expect(feedback("a", "a")).toContainEqual(array);
});

// Check that wrong one letter word gives "incorrect" result
test("wrongly placed letter gives correct result", () => {
  const array = { id: 0, letter: "a", result: "incorrect" };
  expect(feedback("b", "a")).toContainEqual(array);
});

// Check that two letter word with letters in wrong order gives "misplaced" on both letters
test("wrongly placed but correct letters give correct result", () => {
  const array = [
    { id: 0, letter: "b", result: "misplaced" },
    { id: 1, letter: "a", result: "misplaced" },
  ];
  expect(feedback("ab", "ba")).toEqual(array);
});

/* Check that letter that appears multiple times in guess
but only appears once in correct word gets flagged as "incorrect",
not "misplaced" */
test("multiples in guess missing in answer give correct result", () => {
  const array = [
    { id: 0, letter: "h", result: "incorrect" },
    { id: 1, letter: "a", result: "misplaced" },
    { id: 2, letter: "l", result: "incorrect" },
    { id: 3, letter: "l", result: "correct" },
    { id: 4, letter: "å", result: "incorrect" },
  ];
  expect(feedback("cykla", "hallå")).toEqual(array);
});
