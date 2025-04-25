// Time Complexity O(n^2)
// Space Complexity O(1)

// Problem-4 :find the subarray with has the largest sum

const nums = [-2, 1 - 3, 4, -1, 2, 1, -5, 4];

// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let startIndex = 0;
//   let endIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }

//   return { sum: maxSum, subArray: nums.slice(startIndex, endIndex + 1) };
// }

// console.log(maxSubArray(nums));

// Approach 2 which is kadane's algorithm more efficient

// [-2, 1 - 3, 4, -1, 2, 1, -5, 4];
// Time COmplexity O(n)
// Space Complexity O(1)

function kadanesAlgo(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  let startInd = 0;
  let endInd = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      endInd = i;
      console.log(endInd);
    }
    if (currentSum < 0) {
      currentSum = 0;
      startInd = i;
      startInd++;
    }
  }
  return { Sum: maxSum, subArray: nums.slice(startInd, endInd + 1) };
}

console.log(kadanesAlgo(nums));
