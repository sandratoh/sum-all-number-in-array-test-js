const sumItems = array => {
  // Sum all the numbers in the array
  let result = 0;

  array.forEach((item) => {
    // recursive case: if nested array
    if (Array.isArray(item)) {
      result += sumItems(item);

    } else {
      // base case: if only one layer of array
      result += item;
    }
  });

  return result;
};

module.exports = sumItems;

// Logic:
// sumItems[0, 1] = 1
// sumItems[0, [1]] = 0 + [1] = 0 + 1
// sumItems[0, [[[1]]]] = 0 + [[1]] = 0 + [1] = 0 + 1

// Pattern:
// sumItems[0, 1] = 1
// sumItems[0, [1]] = sumItems[0, 1] + []
// sumItems[0, [[1]]] = sumItms[0, 1] + [[]]

// Recursion Implementation
// sumItems[arr, [nestedArr]] = sumItems[arr, nestedArr]