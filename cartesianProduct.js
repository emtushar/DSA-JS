function cartesianProduct(arr1,arr2){
    let arr = []
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            arr.push([arr1[i],arr2[j]])
        }
    }
return arr
}
const arr1=[2,5]
const arr2=[3,6,7]
console.log(cartesianProduct(arr1,arr2))

// Big-O Complexity
// O(mn)
// where m is number of elements in arr1 and n is number of elements in arr2  