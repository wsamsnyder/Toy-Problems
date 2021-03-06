/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/

/*
* @param {number[]} nums
* @param {number} target
* @return {number}
*/

var searchInsert = function(nums, target) {
  let rightIdx = nums.length - 1;
  let leftIdx = 0;
  let middleIdx;

  while (rightIdx - leftIdx >= 0) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (nums[middleIdx] === target) return middleIdx;

    if (target > nums[middleIdx]) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  if (target > nums[middleIdx]) {
    return middleIdx + 1;
  } else {
    if (middleIdx - 1 < 0) {
      return 0;
    } else {
      return middleIdx;
    }
  }
};

//////////////////// TESTS ///////////////////////

// should return the index of the number, if present
console.log(searchInsert([1,3,5,6], 5) === 2);

// should return the index the number would be inserted, if not present
console.log(searchInsert([1,3,5,6], 2) === 1);

// should be able to return index greater then the end of the original array
console.log(searchInsert([1,3,5,6], 7) === 4);

// should be able to return insert index at the start of the array
console.log(searchInsert([1,3,5,6], 0) === 0);

// should be able to handle small input arrays
console.log(searchInsert([1,3], 0) === 0);
console.log(searchInsert([1,3], 2) === 1);
