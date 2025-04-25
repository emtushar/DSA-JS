//Problem3: Remove Duplicates from sorted array and count the unique elements

const nums = [1, 1, 2, 4, 4, 5, 6, 6, 6, 7, 7];

// Approach 1

// function removeDuplicates(nums){
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] === nums[i+1]){
//             nums.splice(i,1)
//             i--
//         }
//     }
//     console.log(nums.length)
// }
// removeDuplicates(nums)

// Time Complexity => O(n)*(0(1)) => O(n)

// Approach 2
// using pointer
// [1,1,2,4,4,5,6,6,6,7,7]

function optimiseRemoveDuplicate(nums) {
  if (nums.length === 0) {
    console.log("Atleast 2 number should be there");
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    //   if(nums[i]<nums[j]){
    //         nums[j-1]=nums[j]
    //         i++
    //   }
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  console.log(i + 1);
}
optimiseRemoveDuplicate(nums);

// Time Complexity O(n)
