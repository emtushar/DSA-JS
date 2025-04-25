// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// // [0,1,2,3,4,5]

// // function computeRange(start,end){
// //     let arr=[]
// //   for(let i=start;i<=end;i++){
// //       arr.push(i);
// //   }
// //   return arr;
// // }
// // console.log(computeRange(0,5));
// // let arr=[]
// // function computeRange(start,end){
// //     if(start > end){
// //     return arr;
// //     }
// //     else{
// //         arr.push(start);
// //  return computeRange(start+1,end);
// //     }
// // }
// // console.log(computeRange(10,12));
// [0,5]//[0,1,2,3,4,5]
// [0,4] //[0,1,2,3,4]
// [0,3]  //[0,1,2,3]
// [0,2]  // [0,1,2]
// [0,1] //[0,1]
// [0,0] //[0]

// function computeRange(start,end){
//     if(start>end){
//         return [];
//     }
//     else{
//        const numbers = computeRange(start,end-1);
//        numbers.push(end)
//         return numbers;
//     }
// }
// console.log(computeRange(0,5));
