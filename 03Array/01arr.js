//bruteforce approach
var removeDuplicates = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  let i = 0;
  for (let values of set) {
    nums[i] = values;
    i++;
  }
  return nums;
};

// better approach

// [1,1,2,2,2,3,3]
var removeDuplicates = function (nums) {
  let left = 0,
    right = 1,
    n = nums.length;
  while (right < n) {
    if (nums[left] !== nums[right]) {
      nums[left + 1] = nums[right];
      left++;
    }
    right++;
  }
  return left + 1;
};

// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3]));

// ROTATE THE ARRAY BY K PLACES
const rotateByK = (nums, k) => {
  let temp = [];
  k = k % n;
  let n = nums.length;
  for (let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }
  for (let i = k; i < n; i++) {
    nums[i - k] = nums[i];
  }
  for (let i = n - k; i < n; i++) {
    nums[i] = temp[i - (n - k)];
  }
  return nums;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

const rotate = (nums, k) => {
  k = k % nums.length;
  nums = reverse(nums, 0, nums.length - k - 1);
  nums = reverse(nums, nums.length - k, nums.length - 1);
  nums = reverse(nums, 0, nums.length - 1);
  return nums;
};

// console.log(rotate([1,2,3,4,5,6,7], 3));

// MOVE ALL ZEROES TO END
const moveAll = (nums) => {
  let n = nums.length;
  let i = 0,
    j = n - 1;
  while (i < j) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
      i++;
    } else if (nums[i] === 0 && nums[j] === 0) {
      j--;
    }
    i++;
  }
  return nums;
};

const moveAllZero = (nums) => {
  let i = 0,
    j = 1;
  if (nums.length === 1) return nums;
  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      j++;
    }
    i++;
    j++;
  }
  return nums;
};

// console.log(moveAllZero([0, 1, 0, 3, 12]));

// UNION
const union = (a, b) => {
  let set1 = new Set();
  for (let i = 0; i < a.length; i++) {
    set1.add(a[i]);
  }
  for (let j = 0; j < b.length; j++) {
    set1.add(b[j]);
  }
  let union = [...set1];
  return union;
};

// console.log(union([1,1,1,2,3,4,5,6],[1,2,3,4,5,6,7,8,9]))

// INTERSECTIONS
const intersection = (a, b) => {
  const its = [];
  const vis = new Array(b.length).fill(0);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j] && vis[j] === 0) {
        its.push(a[i]);
        vis[j] = 1;
        break;
      }
    }
  }

  return its;
};

const inter = (a, b) => {
  let i = 0,
    j = 0;
  let its = [];
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);
  while (i < a.length) {
    if (a[i] === b[j]) {
      its.push(a[i]);
      i++, j++;
    } else if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    }
  }
  return its;
};

// console.log(inter([1, 1, 2, 3, 4, 5, 6], [1, 1, 2, 4, 8, 6, 2]));

// FIND MISSING NUMBER
const find = (nums) => {
  let i = 0;
  while (nums.includes(i)) {
    i++;
  }
  return i;
};

const findOptimal = (nums) => {
  let sum = 0;
  let sum2 = 0;
  let n = nums.length;
  sum2 = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return sum2 - sum;
};
// console.log(findOptimal([0, 2]));

// MAXIMUM CONSEQUTIVE ONES
const maxCon = (nums) => {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      max = Math.max(counter, max);
    } else {
      counter = 0;
    }
  }
  return max;
};

// console.log(maxCon([1,1,0,1,1,1]))

// FIND THE TWICE AND SINGLE OCCURENCE
const findSingle = (nums) => {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  for (let [key, values] of hash) {
    if (values == 1) {
      return key;
    }
  }
  return -1;
};
// console.log(findSingle([4, 1, 2, 1, 2]));
// OPTIMAL SOLUTION

const optimalFindSingle = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
};

// console.log(optimalFindSingle([4,1,2,1,2]))

// Longest Sub-Array with Sum K

const longestSubArray = (nums, k) => {
  let currSum = 0;
  let maxLength = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    currSum += nums[j];

    while (currSum > k) {
      currSum -= nums[i];
      i++;
    }

    // Update the maximum length
    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};

// console.log(longestSubArray([2,0,0,3], 2));

// DUTCH NATIONAL FLAG ALGORITHM
// SORT 0'S 1'S 2'S ARRAY

const sortArr = (nums) => {
  let mid = 0,
    low = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++, mid++;
    } else if (nums[mid] === 1) mid++;
    else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};

// console.log(sortArr([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]));

// Majority of element (> n/2 times)
const majority = (nums) => {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  for (let [key, values] of hash) {
    if (values > nums.length / 2) {
      return key;
    }
  }
  return -1;
};

// console.log(majority([2, 2, 3, 3, 1, 2, 2]));

// KADANE ALGO
const kadane = (nums) => {
  let sum = 0,
    maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }
  return maxSum;
};

// console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3]));

// BEST DAY TO BUY AND SELL THE STOCK

const buyAndSell = (nums) => {
  let profit = 0;
  let lowPrice = nums[0];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] < lowPrice) {
      lowPrice = nums[i];
    } else if (nums[i] - lowPrice > profit) {
      profit = nums[i] - lowPrice;
    }
  }

  return profit;
};

// console.log(buyAndSell([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));

// REARRANGE ELEMENTS BY SIGN
const reArrange = (nums) => {
  let pos = [],
    neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i]);
    } else {
      pos.push(nums[i]);
    }
  }
  for (let j = 0; j < nums.length / 2; j++) {
    nums[j * 2] = pos[j];
    nums[j * 2 + 1] = neg[j];
  }
  return nums;
};

const reArrangeOpt = (nums) => {
  let pos = 0,
    neg = 1;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr[pos] = nums[i];
      pos += 2;
    } else {
      arr[neg] = nums[i];
      neg += 2;
    }
  }
  return arr;
};
// console.log(reArrangeOpt([3, 1, -2, -5, 2, -4]));

// COUNT SUBARRAYS WITH GIVEN SUM K
const countSubArr = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
};

const countSubArrOpt = (nums, k) => {
  let count = 0;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (j <= i && sum > k) {
      sum -= nums[j];
      j++;
    }

    if (sum === k) {
      count++;
    }
  }

  return count;
};

// Test Cases
console.log(countSubArrOpt([1], 0)); // Output: 0

// REARRANGE ELEMENTS BY SIGN (NO EQUAL NUMBER OF +VE AND -VE)
const reArrangeUnequal = (nums) => {
  let pos = [];
  let neg = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) pos.push(nums[i]);
    else neg.push(nums[i]);
  }
  let n = Math.min(pos.length, neg.length);
  for (let i = 0; i < n; i++) {
    nums[i * 2] = pos[i];
    nums[i * 2 + 1] = neg[i];
  }
  let index = n * 2;
  if (pos.length > neg.length) {
    for (let i = n; i < pos.length; i++) {
      nums[index] = pos[i];
      index++;
    }
  } else {
    for (let j = n; j < neg.length; j++) {
      nums[index] = neg[j];
      index++;
    }
  }
  return nums;
};
// console.log(reArrangeUnequal([-1, 2, -2, -2, -3, -5, 6]));

// NEXT PERMUTATION

const nextPerm = (nums) => {
  let index = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    return reverse(nums, 0, nums.length - 1);
  }
  for (let i = nums.length - 1; i >= index; i--) {
    if (nums[i] > nums[index]) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      break;
    }
  }
  nums = reverse(nums, index + 1, nums.length - 1);
  return nums;
};

// console.log(nextPerm([2, 1, 5, 4, 3, 0, 0]));

// LEADERS IN AN ARRAY
const leaders = (nums) => {
  let leader = new Array();
  for (let i = 0; i < nums.length - 1; i++) {
    let leading = true;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        leading = false;
        break;
      }
    }
    if (leading == true) leader.push(nums[i]);
  }
  leader.push(nums[nums.length - 1]);
  return leader;
};

const leaderOpt = (nums) => {
  let n = nums.length;
  let leader = [];
  let max = nums[n - 1];
  leader.push(max);
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i - 1] > max) {
      leader.push(nums[i - 1]);
      max = nums[i - 1];
    }
  }
  leader.reverse();
  return leader;
};

// console.log(leaderOpt([16, 17, 4, 3, 5, 2]));

// LONGEST CONSEQUTIVE SEQUENCE
const longest = (nums) => {
  if (nums.length === 0) return 0;
  let longSeq = 1;
  let currCount = 1;
  let lastMin = -Infinity;
  let i = 0;
  nums.sort((a, b) => a - b);
  while (i < nums.length) {
    if (nums[i] === lastMin) {
      i++;
    } else if (lastMin + 1 == nums[i]) {
      lastMin = nums[i];
      currCount++;
      i++;
      longSeq = Math.max(currCount, longSeq);
    } else {
      lastMin = nums[i];
      currCount = 1;
    }
  }
  return longSeq;
};

// console.log(longest([0,3,7,2,5,8,4,6,0,1]))

// LONGEST SUBARRAY WITH SUM k
// const withSumK = (nums, k) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = 0;
//     ct = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[i];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const withSumK = (nums, k) => {
  let count = 0;
  let pfxSum = 0;
  let pfxHash = new Map();
  pfxHash.set(pfxSum, 0);

  for (let i = 0; i < nums.length; i++) {
    pfxSum += nums[i];

    if (pfxHash.has(pfxSum - k)) {
      count += pfxHash.get(pfxSum - k); 
    }

    pfxHash.set(pfxSum, (pfxHash.get(pfxSum) || 0) + 1);
  }

  console.log(pfxHash)
  return count;
};

console.log(withSumK([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3), "hi");
