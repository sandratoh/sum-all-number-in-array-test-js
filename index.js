const sumItems = array => {
  // Sum all the numbers in the array
  // base case: if only one layer of array
  let result = array.reduce((sum, i) => sum + i);
  return result;
  
  // let sum;
  // array.forEach((num) => {
  //   sum += num;
  //   // return num;
  // });
  // // recursive case: if nested array
  // // if (Array.isArray(item)) {

  // // }
};

module.exports = sumItems;

// Logic:
// sumItems[0, 1] = 1
// sumItems[0, [1]] = 0 + [1] = 0 + 1
// sumItems[0, [[[1]]]] = 0 + [[1]] = 0 + [1] = 0 + 1

// Pattern:
// sumItems[0, 1] = 1
// sumItems[0, [1]] = sumItems[0, 1] + sumItems[1]
// sumItems[0, [[1]]] = sumItms[0, 1] + sumItems[[1]]

// Recursion Implementation
// sumItems[arr, [nestedArr]] = sumItems[arr] + sumItems[nestedArr]
