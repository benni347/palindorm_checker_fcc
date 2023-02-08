function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '')  // Remove non alpha numeric values
  str = str.toLowerCase()  // Convert it to the same case
  let str_reversed = str.split("")  // Firstly convert the str to an array
  str_reversed = str_reversed.reverse()  // Reverse the array with the reverse function
  str_reversed = str_reversed.join("")  // Finally join the reversed str back together
  return str_reversed === str  // Check if the reversed string is same as the input if so, it returns true
}


// Tests Below
/*
palindrome("eye");  // True
palindrome("_eye")  // True
palindrome("not a palindrome")  // False
palindrome("A man, a plan, a canal. Panama");  // True
palindrome("never odd or even")  // True
palindrome("nope")  // False
palindrome("almostomla")  // False
palindrome("My age is 0, 0 si ega ym.")  // True
palindrome("1 eye for of 1 eye.")  // False
palindrome("0_0 (: /-\ :) 0-0")  // True
palindrome("five|\_/|four")  // False
*/
