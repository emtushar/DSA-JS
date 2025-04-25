// for loop bubble sort 

function bubbleSort(arr){
    for(let j=0;j<arr.length;j++){
     for(let i=0;i<arr.length -1;i++){ //there is no need to check the last element as it has been checked while checking the second last
        if(arr[i] > arr[i+1]){
         let temp=arr[i];
         arr[i]=arr[i+1];
         arr[i+1]=temp;
        }
      }
    }
  
    return arr;
    
  }
  console.log(bubbleSort([-3,6,2,5,-7,34]));