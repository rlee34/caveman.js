/* * * * * * * * * * * * * * * * * * * * * *
 *    CAVEMAN JS PT 2: ARRAY.PROTOTYPE     *
 * * * * * * * * * * * * * * * * * * * * * */

// Part of what makes arrays so powerful are the many useful methods
// attached to the `Array.prototype`. They make it easy to take a set of
// data and `sort` or `filter` it. Of course, as cavemen we are throwing
// all those functions out the window and implementing them from scratch.

// Note that normally these functions are called directly on the array,
// i.e. [1, 2, 3].pop(), but since we are doing this manually, we'll 
// have to input the array as the first argument.


/**  Array.prototype.pop()  **/
// This removes the last element from an array and returns it. 
// Since it's your first one, I'll do it for you.
var pop = function(array) {
  var popped = array[array.length - 1];

  if (array.length > 0) {
    array.length--;
  }

  return popped;
};


/**  Array.prototype.push  **/
// Just the opposite of `pop`, this adds a new value to the end 
// of an array, and returns the new length.
var push = function(array, value) {
  array[array.length] = value;
  return array.length;
};


/**  Array.prototype.shift  **/
// Removes the first element from an array. Won't be as simple as `pop`.
var shift = function(array) {
  var first = array[0];

  for(var i = 1; i < array.length; i++) {
    array[i-1] = array[i];
    console.log(array)
  }

  if (array.length > 0)
    array.length--;

  return first;
};


/**  Array.prototype.unshift  **/
// You may sense a pattern. This adds an value to the start of an array.
var unshift = function(array, value) { 
  for(var i = array.length; i > 1; i--) {
    array[i] =  array[i - 1];
  }

  array[0] = value;
  
  return array.length;
};


/**  Array.prototype.join  **/
// Combines an array of sub-strings with an optional separator string 
// inbetween each. The separator should default to a comma.
var join = function(array, separator) {
  separator = separator || ',';
  var result = array[0] + '' || '';

  for(var i = 1; i < array.length; i++) {
      result += separator + array[i];
  }
  
  return result;
};


/**  Array.prototype.reverse  **/
// Reverses an array in place as well as returning the mutated array. 
// To demonstrate reusing your functions, I've solved `reverse` in a
// bit of a odd way using your `push`... you got that working, right?
var reverse = function(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i--) {
    push(reversed, array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    array[j] = reversed[j];
  }

  return array;
};


/**  Array.prototype.concat  **/
// This combines any number of sub-arrays into a new larger array. 
// You may find previous functions useful here too!
var concat = function() {
  var result = [];
  var count = 0

  if(arguments.length < 2) {
    return result;
  }

  for(var i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] === 'number') {
      result[count] = arguments[i];
      count++;
    }
    for(var j = 0; j < arguments[i].length; j++) {
      if(typeof arguments[i] === 'string') {
        result[count] = arguments[i];
        count++
        break;
      } else {
        result[count] = arguments[i][j];
        count++
      }     
    }
  }

  return result;
};
