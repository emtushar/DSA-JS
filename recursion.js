// Recursion
const num = [2, 7, 8, 2, 6, 3];
// multiplication =>2*7*8*2*6*3=14*16*18=4032

// function multiply(num){
//     let product =1;
//     for(let i=0;i<num.length;i++){
//         product =product*num[i];
//     }
//     return product;
// }

// console.log(multiply(num))

// using recursion
// function recursiveFunc(num){
//     if(num.length<1){
//       return 1;
//     }
//     else{
//         return num[num.length -1]*recursiveFunc(num.slice(0,num.length-1))
//     }
// }
// console.log(recursiveFunc(num))
