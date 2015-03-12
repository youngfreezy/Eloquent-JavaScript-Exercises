// Using the example data set from this chapter, 
// compute the average age difference between mothers and children 
// (the age of the mother when the child is born). You can use the 
// average function defined earlier in this chapter.

// Note that not all the mothers mentioned in the data are themselves 
// present in the array. The byName object, which makes it easy to find 
// a person’s object from their name, might be useful here.


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//actual code written:

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2




// //When we looked up all the people in our data set that lived more than 90 years, 
// only the latest generation in the data came out. Let’s take a closer look at that phenomenon.
// //Compute and output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

// For bonus points, write a function groupBy that abstracts the grouping operation. 
// It should accept as arguments an array and a function that computes the group for an
//   element in the array and returns an object that maps group names to arrays of group members.

//can you explain what's going on here line by line?
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
