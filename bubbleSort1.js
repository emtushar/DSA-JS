// bubble sort do while loop


function bubbleSort(arr){
    let swapped 

    do{
        swapped =false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped =true
            }

        }
    }
while (swapped)
}
const arr = [-3,6,2,5,-7,34]

bubbleSort(arr)
console.log(arr)
