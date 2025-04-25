function insertionSort(arr){
    // loop of unsorted array
for(let i=1;i<arr.length;i++){
    let numberToInsert = arr[i]
    // index of sorted array
    let j = i-1
    // loop to iterate on sorted array
    while(j>=0 && arr[j]>numberToInsert){
    arr[j+1]=arr[j]
    j=j-1
    }
    arr[j+1]=numberToInsert
}
return arr;
}

const arr=[-6,20,8,-2,4]
console.log(insertionSort(arr)); 