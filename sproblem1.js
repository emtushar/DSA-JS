// the sky is blue
// blue is sky the
// class Stack {
//   constructor(stack) {
//     this.stack = stack;
//   }
//   pop() {
//     return this.stack.pop();
//   }
//   size() {
//     return this.stack.length;
//   }
// }
// const stack = new Stack(["the", "sky", "is", "blue"]);
// function reverse() {
//   if (stack.size() < 1) {
//     return " ";
//   } else {
//     let numbers = stack.pop() + " " + reverse();
//     return numbers;
//   }
// }
// console.log(reverse());

// Approach 2
// function reverseWords(str) {
//   const d = str.split(" ");
//   const stack = [];
//   for (let i = 0; i < d.length; i++) {
//     stack.push(d[i]);
//   }
//   let final = "";
//   while (stack.length > 0) {
//     final = final + stack.pop() + " ";
//   }
//   return final;
// }
// console.log(reverseWords("the sky is blue"));

function reverseWords(str) {
  const d = str.split(" ");
  const stack = [];
  for (let i = 0; i < d.length; i++) {
    stack.push(d[i]);
  }
  let final = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      final += " " + current;
    }
  }
  return final.trim();
}
console.log(reverseWords(" the          sky         is  blue"));

// Time Complexity O(n)
// Space Complexity O(n)
