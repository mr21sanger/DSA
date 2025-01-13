const twoSum = (nums, target) => {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums.length;
    if (hash.has(temp)) {
      return [hash.get(temp), i];
    }
    hash.set(nums[i], i);
  }
};

// recursion factorial

// console.log(fact(8))

// Factorial Difference

const factDiffer = (n, m) => {
  const memo = {};
  const fact = (n) => {
    if (n === 1) return 1;
    if (memo[n]) return memo[n];
    return (memo[n] = n * fact(n - 1));
  };
  num = n * fact(n - 1) - m * fact(m - 1);
  return num;
};

// console.log(factDiffer(3, 2));

const maxSum = (nums, k) => {
  let sum = 0,
    l = 0,
    r = 0,
    maxSum = 0;
  let subArray = [];
  console.log("hii");
  while (l < nums.length) {
    
    if (r === nums.length) {
      l++;
      r = l;
      continue;
    }
    console.log(nums[l], nums[r]);
    subArray.push([nums[l], nums[r]]);
    r++;
  }
  return subArray;
};

console.log(maxSum([1, 2, 3, 4, 5], 1));
