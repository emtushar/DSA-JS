function fibonacci(n){
    let a=[0,1]
      for(let i=2;i<n;i++){
      a[i] = a[i-2]+ a[i-1]; 
    }
  
      console.log(a);
    
  }
  fibonacci(6);