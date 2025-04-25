// Backtacking algorithm

// Find all the subsets of a given array and it should not contain any duplicates

function subsets(nums) {
  let result = [];
  let temp = [];
  function recursiveSets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    } else {
      temp.push(nums[i]);
      recursiveSets(nums, i + 1);
      temp.pop();
      recursiveSets(nums, i + 1);
    }
  }
  recursiveSets(nums, 0);
  return result;
}
console.log(subsets([1, 2, 4], 0));
