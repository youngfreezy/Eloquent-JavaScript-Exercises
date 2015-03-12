// Use the reduce method in combination with the concat method to “flatten” 
// an array of arrays into a single 
// array that has all the elements of the input arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

// Arrays also come with the standard methods every and some. 
// Both take a predicate function that, 
// when called with an array element as argument, 
// returns true or false. Just like && returns a true value 
// only when the expressions on both sides are true, every 
// returns true only when the predicate returns true for all 
// elements of the array. Similarly, some returns true as soon as 
// the predicate returns true for any of the elements. They do not 
// process more elements than necessary—for example, if some finds 
// that the predicate holds for the first element of the array, it 
// will not look at the values after that.

// Write two functions, every and some, that behave like these methods, 
// except that they take the array as their first argument rather than being 
// a method.

function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false