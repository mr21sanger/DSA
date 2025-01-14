// SET MATRIX  BRUTEFORCE SOLUTION
const markZero = (nums) => {
  // Function to mark the row as -1 when a 0 is found
  function markRowZero(i) {
    for (let j = 0; j < nums[i].length; j++) {
      nums[i][j] = -1;
    }
  }

  // Function to mark the column as -1 when a 0 is found
  function markColZero(j) {
    for (let i = 0; i < nums.length; i++) {
      nums[i][j] = -1;
    }
  }

  // Traverse the matrix to find 0s and mark the corresponding row and column
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 0) {
        markRowZero(i); // Mark the row
        markColZero(j); // Mark the column
      }
    }
  }

  // Convert -1 back to 0 after processing the whole matrix
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === -1) nums[i][j] = 0;
    }
  }

  return nums;
};

// Better approach

const markZeroBetter = (nums) => {
  let n = nums.length;
  let m = nums[0].length;
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] !== 0 && (row[i] == 1 || col[j] == 1)) {
        nums[i][j] = 0;
      }
    }
  }
  return nums;
};

// console.log(
//   markZeroBetter([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

// Transpose of matrix

const transpose = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums[i].length; j++) {
      let temp = nums[i][j];
      nums[i][j] = nums[j][i];
      nums[j][i] = temp;
    }
  }
  return nums;
};

// console.log(
//   transpose([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

const rotateMatrix = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = nums[i][j];
      nums[i][j] = nums[j][i];
      nums[j][i] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i].reverse();
  }
  return nums;
};
// console.log(
//   rotateMatrix([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

//   SPIRAL TRAVERSAL OF A MATRIX
let nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const spiral = (nums) => {
  let n = nums.length;
  let m = nums[0].length;
  let ans = new Array();
  let left = 0,
    top = 0,
    right = m - 1,
    bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(nums[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(nums[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(nums[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(nums[i][left]);
      }
      left++;
    }
  }
  return ans;
};

console.log(spiral([[1, 2, 3, 4, 5, 6]]));
