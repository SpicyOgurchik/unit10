//returns 1, 2, 3, 4
new Set([1,1,2,2,3,4]); 

// returns "ref"
[...new Set("referee")].join(""); 

// map contains
// 0: {Array(3) => true}
// 1: {Array(3) => false}
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);



const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
hasDuplicate([1,3,2,1]); // true
hasDuplicate([1,5,-1,4]); // false
