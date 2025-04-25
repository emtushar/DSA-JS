function factorial(n){
    let fact=1;
    for(i=2;i<=n;i++){
      fact=fact*i;
    }
    // console.log(`factorial of ${n} is ${fact}`);

    return fact;
  }
//   factorial(5); 
console.log(factorial(5));