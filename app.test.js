import { test, expect } from "vitest";

import { isPalindrome } from "./app.js";

test(`check if isPalindrome works 'racecar'`, function () {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("racetrack")).toBe(false);
});
