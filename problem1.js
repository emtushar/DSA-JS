// Factorial

// Factorial
// 4!
// 4*3*2*1;
// function factorial(n){
//     let fact=1;
//     for(let i=n;i>0;i--){
//         fact=fact*i
//     }
//     return fact
// }

// console.log(factorial(3))

// using recursion
function recursiveFact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * recursiveFact(n - 1);
  }
}
console.log(recursiveFact(3));
