// Write a range function that takes two arguments, 
// start and end, and returns an array containing all 
// the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of 
// numbers and returns the sum of these numbers. 
// Run the previous program and see whether it does indeed return 55.

function range(num1, num2){
	x = []
	for(var i = num1; i<=num2; i++){
		x.push(i);
	}
	return x;
	}


function reduceWithoutForEach(arr){
	var sum = 0;
	for(var i = 0; i<arr.length; i++){
		sum += arr[i];
	}
	
	return sum;
}

console.log(reduceWithoutForEach(range(1, 10, 2)));
console.log(range(1, 10, 2));

//range with step:

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

//reverse an array

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
