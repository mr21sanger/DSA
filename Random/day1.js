var smallestDistancePair = function (nums, k) {
  let minDistance = 0;
  let pair = [];
  let i = 0;
  j = i + 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pair.push([nums[i], nums[j]]);
    }
  }

  if (pair.length < k) return false;
  minDistance = pair[k - 1][0] - pair[k - 1][1];
  return minDistance > 0 ? minDistance : 0;
};

// console.log(smallestDistancePair((nums = [62, 100, 4]), (k = 2)));

const reverseTheString = (str, val) => {
  let lastIdx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === val) lastIdx = Math.max(lastIdx, i);
  }

  if (lastIdx === -1 || lastIdx === str.length - 1) return str;
  let i = lastIdx,
    j = str.length;
  str = str.split("");
  while (i < j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++, j--;
  }
  return str.join("");
};

// console.log(reverseTheString("abcdcesahkpx", "c"));

// SANITY OF AN ARRAY
const sanity = (arr) => {
  let sum = 0;
  const indexArr = arr.map((val, i) => ({ val, indexes: i }));
  indexArr.sort((a, b) => a.val - b.val);

  const lastOccurence = new Map();
  indexArr.map((lastIndex) => {
    lastOccurence.set(lastIndex.val, lastIndex.indexes);
  });
  arr.map((val, idx) => {
    let lastIdx = lastOccurence.get(val);
    sum += idx + lastIdx;
  });

  return sum;
};

// console.log(sanity([1, 1, 1, 1]));

function processData(input) {
  console.log("hii")
  const arr = input.trim().split(" ").map(Number);
  const result = sanity(arr);
  console.log(result);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = ""; // Declare _input with let or var
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
