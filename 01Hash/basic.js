// Frequencies of Limited Range Array Elements

function frequencyCount(arr, N) {
  //code here
  let hash = new Map();
  for (let i = 0; i < N; i++) {
    if (hash.has(arr[i])) hash.set(arr[i], hash.get(arr[i]) + 1);
    else hash.set(arr[i], 1);
  }
  let newArr = [];
  for (let i = 0; i < N; i++) {
    if (hash.has(i)) {
      arr[i] = hash.get(arr[i]);
    } else arr[i] = 0;
  }
  return arr;
}

console.log(frequencyCount([3,3,3,3], 4));
// console.log("hii")