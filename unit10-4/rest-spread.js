// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...values) => values.filter((num) => num % 2 === 0);


// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...values) => Math.min(...values);

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...values) => [...arr, ...values.map((val) => val * 2)]

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
    let obj2 = { ...obj }
    obj2[key] = val;
    return obj2;
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
    let obj2 = { ...obj }
    delete obj2[key]
    return obj2;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
    let obj2 = { ...obj, key: val }
    return obj2;
  
  }