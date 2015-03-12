function reduce(array, combine, start) {
var current = start;
for (var i = 0; i < array.length; i++)
current = combine(current, array[i]);
return current;
}

function range(start, end, step) {
if (step == null) step = 1;
var array = [];

if (step > 0) {
for (var i = start; i <= end; i += step)
array.push(i);
} else {
for (var i = start; i >= end; i += step) 
// could you have said for(var i = start; i <= end; i-=step) also?  no because of negative subtraction in incrementer
//It’s accounting for negative numbers it seems like.  
array.push(i);
}
return array;
}

function reverseArrayInPlace(array) {
for (var i = 0; i < Math.floor(array.length / 2); i++) { //math.floor rounds down
var old = array[i];
array[i] = array[array.length - 1 - i]; //setting values with indices.  
array[array.length - 1 - i] = old;
}
return array;
}
//insertion sort similarities.
[4, 5, 6, 1, 2]
//after first iteration:
[2, 5, 6, 1, 4]
//after second:
[2, 1, 6, 5, 4]
//after third:



var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(current, next) {
return current.concat(next);
}, []));

//in reduce, nameless function's first parameter is the current element