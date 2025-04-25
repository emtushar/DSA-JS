// function climbingStairCase(n){
//     if(n<=2){
//       return n
//     }
//     return climbingStairCase(n-1)+climbingStairCase(n-2)
//   }
//   console.log(climbingStairCase(5))

function climbingStairCase(n){
    numberOfWays = [1,2]
    for(let i=2;i<n;i++){
     numberOfWays[i] = numberOfWays[i-1]+numberOfWays[i-2]
    }
    return numberOfWays[n-1]
}
console.log(climbingStairCase(5))

// Big-O Complexity
// O(n)