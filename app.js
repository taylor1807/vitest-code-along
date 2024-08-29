export function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("racetrack"));

// const isPalindromeQuick = (string) => string.split("").reverse.join("") === string

// function moreNormal(string) {
//   const split = string.split("");
//   const reversedArray = split.toREversed();
//   const backToString = reversedArray.join("");
//   return backToString === string;
// }
