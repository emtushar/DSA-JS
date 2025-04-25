// function isPrime(n){
//     if(n<2){
//       return false;
//     }
//     for(let i=2;i<n;i++){
//       if(n%i===0){
//         return false;
//         break;
//       }
//     return true;
   
//     }
//   }
//   console.log(isPrime(7));


//   other
function isPrime(n){
    if(n<2){
      return false;
    }
    for(let i=2;i<= Math.sqrt(n);i++){
      if(n%i===0){
        return false;
        break;
      }
    return true;
   
    }
  }
  console.log(isPrime(4));