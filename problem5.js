// Reverse a string

// function reverseString(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
//   }
//   return rev;
// }
// console.log(reverseString("hello"));

// function reverseString2(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
//   }
//   return rev;
// }
// console.log(reverseString2("hello"));

// Using Recursion

// function reverse(str) {
//   if (str.length < 1) {
//     return "";
//   }
//   return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
// }
// console.log(reverse("hello"));

// roadside way
// hello => ello+h=>llo+eh=>lo+leh=>o+lleh=>""+olleh
function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse("hello"));
