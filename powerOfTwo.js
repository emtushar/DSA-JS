function isPowerOfTwo(n){
    // if(n<1){
    //   return false;
    // }
    // while(n>1){
    //   if(n%2!==0){
    //     return false;
    //   }
    //   n=n/2;
    // }
    // return true;
  
  
    // for bitwise poweroftwo
    
    // if and of a number and its previous number is zero,then the number can be expressed in the form of 2
    if(n<1){
      return false;
    }
    return (n & (n-1)) === 0
  }
  console.log(isPowerOfTwo(3))