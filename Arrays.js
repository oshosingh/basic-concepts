// Code for Arrays Data structure

/**
 *  Define an Array:
 *  
 *  Array is defined using square brackets []
 * 
 *  Array properties:
 *  
 *  1. It can contain multiple elements, see below code
 *  2. In the RAM memory, all these elements are adjacent to each other, meaning if 1st is at location no A1
 *     then second elements will be at A2 and so on.
 */

var a = [1,2,3,4]




/**
 *  Concept of indexes:
 * 
 *  1. Array elements can be accessed using index number. See example below
 *  2. Why index works like this, see above property no 2
 *  3. There is no concept of blank in arrays 
 *         (if you write [1,] then in array it will only have 1 element which is 1 itself)
 *          (if you write [1, ,2] then it will throw compilation error, because blanks are not allowed)
 *          
 *          Other languages, might add 0 by default on blank spaces (refer the documentation of arrays for that language)
 */

var a = [1,2,3,4]

a[0] // accessing 1st element because index starts from 0
a[1] // accessing 2nd element 
a[2] // accessing 3rd element

//..... So On  
a[a.length-1] // accessing last element
