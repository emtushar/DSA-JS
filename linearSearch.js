// function linearSearch(n){
//     let a=[5,8,2,56,-7,13,9];
//     for(let i=0;i<a.length;i++){
//       if(a[i]===n){
//       return i;
//       }
  
//     }
//     return -1;
    
//   }
//   console.log(linearSearch(8));

//   or
function linearSearch(arr,n)
{
    
    for(let i=0;i<arr.length;i++){
      if(arr[i]===n){
      return i;
      }
    }
    return -1;
  }
  console.log(linearSearch([2,6,98,4,5,3],5));