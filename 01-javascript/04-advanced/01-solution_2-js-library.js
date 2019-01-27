**
 *
 * Requires Node >= v7
 *
 */

function each(array, callback) {
  for (const [index, element] of array.entries()) {
    callback(element, index);
  }
}

function map(array, callback) {
  const results = [];

  // using each is a more functional approach, rather than writing a for loop for every action
  each(array, (element, index) => {
    results.push(callback(element, index));
  });

  return results;
}

function filter(array, callback) {
  const results = [];

  each(array, (element, index) => {
    // why compare with true if all evaluations are reduced to a boolean value?
    // this enforces the need for our callback to filter (and reject, find, etc) to return a boolean value,
    // rather than any value, which may have been a mistake
    if (callback(element, index) === true) {
      results.push(element);
    }
  });

  return results;
}

function find(array, callback) {
  for (const [index, element] of array.entries()) {
    if (callback(element, index) === true) {
      return element;
    }
  }
}

function reject(array, callback) {
  const results = [];

  each(array, (element, index) => {
    if (callback(element, index) === false) {
      results.push(element);
    }
  });

  return results;
}

function reduce(array, callback, memo) {
  // we don't ever want to perform destructive tasks on the original array,
  // thus we make a copy
  const clone = [].concat(array);

  if (memo === undefined) {
    // this destructive action only affects the copy of the array, not the original
    memo = clone.pop();
  }

  each(clone, (element, index) => {
    memo = callback(memo, element, index);
  });

  return memo;
}

const _ = {
  each,
  filter,
  find,
  map,
  reduce,
  reject,
};

/**
 * Use our new underscore/lodash library
 */

const stringArray = ['squid', 'fish', '1', '2', 'dog', '3', '4', '5', '6', '7', 'cat', 8, 10];


_.each(stringArray, (element, index) => {
  console.log(`The element ${ element } was found at index ${ index }`);
});

// Our goal is to take this stringArray, convert all values to integers,
// remove non-integer values, grab all even values and finally sum those values.


//  But first...

console.log(`We found a ${ _.find(stringArray, element => element === 'dog') } in the stringArray`);


let results = _.map(stringArray, element => parseInt(element, 10));
// ES2015+ fat arrow functions allow for implicit returns with single line statements
// The above is equivalent to this:
// let results = _.map(stringArray, element => { return  parseInt(element, 10); });

// An equivalent ES5 or below function would look like this:
// var results = _.map(stringArray, function(element) {
//   return  parseInt(element, 10);
// });



console.log(`The results of mapping our string array: ${ results }`);

// isNaN is a JavsScript function that returns a boolean value determining if the passed value is 'NaN'

results = _.reject(results, isNaN);
// we can pass isNaN directly and it will be invoked as 'callback' in our reject function
// if that is confusing, it is simply a shorter way to write the following:
// results = _.reject(results, element => isNaN(element));
console.log(`The results of rejecting our results array: ${ results }`);

results = _.filter(results, element => element % 2 === 0);

console.log(`The results of filtering our results array: ${ results }`);

// Finally we can reduce the remaining values
const result = _.reduce(results, (memo, element) =>  memo + element);
console.log(`The result of reducing our results array: ${ result }`);

/**
 *
 * Helper Functions
 *
 */

function toInteger(element) {
  return parseInt(element, 10);
}

function isEven(element) {
  return element % 2 === 0;
}

function sum(a, b) {
  return a + b;
}

// Chaining this together into a more functional style might look something like this...
const allAtOnce = _.reduce(_.filter(_.reject(_.map(stringArray, toInteger), isNaN), isEven) , sum);

console.log(`The result of our functional approach is: ${ allAtOnce }`);