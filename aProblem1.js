a = [25, 34, 26, 20, 18, 50];
b = [25, 34, 26, 20, 18, 50, 50];

// Approach -1
// 1.1 with inbuilt func

// function secondLargest(a){
//     a.sort((a,b)=>b-a) //descending order
//     console.log(a[1])
// }
// secondLargest(a)
// secondLargest(b)//fails for duplicate

// Time Complexity O(nlogn)

// 1.2 with inbuilt func for duplicate case

// function secondLargest2(b){
//     // make unique array
//     const c = Array.from(new Set(b)) //gives sorted array in descending order
//      console.log(c[1])
// }
// secondLargest2(b)

// b=[25,34,26,20,18,50,50]
// l-1,s-1
// 25
// s-1,l-25
// 34
// s-25,l-34
// 26
// s-26,l-34
// 20
// s-26,l-34
// 18
// s-26,l-34
// 50
// s-34,l-50
// 50
// s-34,l-50

// Approach -2 optimise approach
function optimiseSecondLargest(arr) {
  let largestNum = Number.NEGATIVE_INFINITY;
  let secondLargestNum = Number.NEGATIVE_INFINITY;
  if (arr.length <= 1) {
    console.log(-1);
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = arr[i];
    } else if (arr[i] !== largestNum && arr[i] > secondLargestNum) {
      secondLargestNum = arr[i];
    }
  }
  console.log(secondLargestNum);
}
optimiseSecondLargest(b);

// Time Complexity O(n)
