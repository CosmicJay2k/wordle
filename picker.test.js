import { test, expect } from "@jest/globals";
import { wordPicker } from "./picker.js";

const list = ["bulle", "aktar", "varje", "dag"];

// Check that return is never undefined
test("return is not undefined", () => {
  expect(wordPicker(list, 1, false)).not.toBeUndefined();
  expect(wordPicker(list, 10, false)).not.toBeUndefined();
  expect(wordPicker(list, 0, true)).not.toBeUndefined();
});

// Check to see that the function returns a five letter word when prompted to
test("returns a word with specified number of letters ", () => {
  expect(wordPicker(list, 5, false)).toHaveLength(5);
});
