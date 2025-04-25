// [1,2,3,4,5,6,7] => k =3  => [5,6,7,1.2.3.4]
// [1,2,3,4,5,6,7]=>[7,1,2,3,4,5,6]=>[7,6,1,2,3,4,5]=>[7,6,5,1,2,3,4,5]

// Problem2 : k-rotation

// 2.1 k-rotation with inbuit functions

// function rotateArray(nums,k){
//     if(k>nums.length){
//         k=k%nums.length
//     }
//     const rotatedElem = nums.splice(k+1,nums.length)
//     nums.unshift(...rotatedElem)
//     console.log(rotatedElem)
//     console.log(nums)
// }
// rotateArray([1,2,3,4,5,6,7],10)

// Time Complexity O(n)+O(n)=>O(n)

// 2.2 k rotation optimise without inbuilt function

// [1,2,3,4,5,6,7]=>[7,6,5,4,3,2,1]=>[5,6,7,4,3,2,1]=>[5,6,7,1,2,3,4]

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

function optimiseRotateArray(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
}
optimiseRotateArray([1, 2, 3, 4, 5, 6, 7], 10);

// Time Complexity O(n)+O(k)+O(n-k)=>O(n)
