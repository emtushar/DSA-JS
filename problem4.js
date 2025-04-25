// // fib(5)
// // 0,1,1,2,3,5,8,13,21,34
// //                         5
// //           4                            3
// //      3          2                 2         1
// //   2     1     1   0           1       0
// // 1   0

// without recursion

// Time Complexity O(n)
// Space Complexity O(n)

function fib(n) {
  let num = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      num.push(i);
    } else {
      num.push(num[i - 1] + num[i - 2]);
    }
  }
  return num[n];
}

console.log(fib(6));

// // with recursion

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// console.log(fib(9));
