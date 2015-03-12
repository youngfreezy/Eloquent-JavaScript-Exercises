
// Write a function arrayToList that builds up a data structure 
// like the previous one when given [1, 2, 3] as argument, and write a 
// listToArray function that produces an array from a list. Also write the 
// helper functions prepend, which takes an element and a list and creates a 
// new list that adds the element to the front of the input list, and nth, 
// which takes a list and a number and returns the element at the given 
// position in the list, or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.
//http://jsbin.com/yutiqi/2/edit?js,output

// Write a function arrayToList that builds up a data structure 
// like the previous one when given [1, 2, 3] as argument, and write a 
// listToArray function that produces an array from a list. Also write the 
// helper functions prepend, which takes an element and a list and creates a 
// new list that adds the element to the front of the input list, and nth, 
// which takes a list and a number and returns the element at the given 
// position in the list, or undefined when there is no such element.

// If you havenâ€™t already, also write a recursive version of nth.


function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list}; // what does the rest: list do? is that a built-in?
  // FOYSAL
  // It just adds the value of the list from previous loop into the object
  // Again, you can just console.log() the value of list on each iteration and see for yourself what this value contains
  return list;
}

function listToArray(list) {
  var array = [];
  /* FOYSAL
   ok so track back to the for loop syntax, for(instantiation; condition; do something for each iteration){} 
   so in the following code, first you assign instantiate the value of node=list. and set the condition to be just "node". remember how conditions work? they get translate into a boolean true or false. so here the condition is node. so as long as node translates into boolean true, the loop continues. and in each iteration we swap the value of node to be node.rest so previously node was {value: "some value", rest: {content of another node}} and in the next loop node = {content of another node} and eventually node.rest becomes null so in the following iteration node translates to boolean false and the loop stops.
   
   Again, run a console log and see what is stored in the variables in each iteration.
   */
  for (var node = list; node; node = node.rest) // can you explain what's in this for loop parenthesis?
    array.push(node.value);
  return array;
}

function prepend(value, list) { // what is this doing?
  return {value: value, rest: list};
}

/* FOYSAL
its a recursive function, you probably got that. now just console.log() away the variables inside
and you'll see how it works under the hood.
the function takes a list and returns the value of nth item from the list
first it checks if the list actually exists, if not returns undefined
then it checks if n==0 if so, then this is the content we are looking at
if none of the above applies it goes down one level and calls the function with a decreased number of level

so let's say you call nth with a 7 level deep list and try to get the value of level 4 so you call
nth(list, 4)
1. n!=0 so we call nth(next level, 4-1)
2. n!= so we call nth(next level, 3-1)
2. n!= so we call nth(next level, 2-1)
2. n!= so we call nth(next level, 2-1)
2. n==0 so this is the value we are looking for. return list.value

sorry if it doesn't clear your confusion, not sure how else to explain this. but I can assure you that console.log()ing everything under the hood will clear it up for you.
*/
function nth(list, n) { //can you explain this function?
  if (!list) {
  //console.log('list doesnt exist');
    return undefined;
  } else if (n == 0) {
  //console.log('value found', list.value);
    return list.value;
  } else {
  //console.log('calling nth again with list: ', list.rest);
  //console.log('with n: ' n-1);
    return nth(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
// â†’ {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// â†’ [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// â†’ {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// â†’ 20



// Write a function, deepEqual, that takes two values and returns true only 
// if they are the same value or are objects with the same properties 
// whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) // I understand this. above it checks if they were the same value
      //or if they were objects. here it's checking the property values.  If there's no property in A or if line 55 (if (a === b) return true;)is true for the proprties return true.  
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true