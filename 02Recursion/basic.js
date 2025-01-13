// PRINT USING RECURSION

// 1. NAME 5 TIMES*******************************

let nam = "shiwang sanger";

const printName = (i, n) => {
  if (n < i) {
    return;
  }
  console.log(nam);
  printName(i + 1, n);
};

// printName(1, 5);

// PRINT LINEARLY 1 TO N***************************

const linearly = (i, n) => {
  if (i > n) return;
  console.log(i);
  linearly(i + 1, n);
};
// linearly(1, 5);

// PRINT IN REVERSE*******************************
const rev = (i, n) => {
  if (i > n) return;
  rev(i + 1, n);
  console.log(i);
};

// rev(1, 10);

// SUM OF FIRST N NUMBERS
// const sum = (i, n) => {
//   if (i < 1) {
//     console.log(n);
//     return;
//   }
//   sum(i - 1, n + i);
// };

// OTHER WAY
const sum2 = (n) => {
  if (n === 0) return 0;
  return n + sum2(n - 1);
};

// console.log(sum2(10));

// REVERSE AN ARRAY USING RECURSION
let arr = [1, 9, 0, 8],
  l = 0,
  r = arr.length - 1;

const reverseArr = (l, r) => {
  console.log(l, r);
  if (l >= r) return arr;
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return reverseArr(l + 1, r - 1);
};

// console.log(reverseArr(l, r));

// PAALLINDROME CHECK USING RECURSION

const pallindrome = (str, i) => {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return pallindrome(str, i + 1);
};

console.log(pallindrome("A man, a plan, a canal: Panama",0))


// FIBONACCI SERIES
const fibonaciElem = ( n )=>{
  if(n <= 1) return n
  const last =  fibonaciElem(n-1)
  const secLast =  fibonaciElem(n-2)
  return last + secLast
}

// console.log(fibonaciElem(9))