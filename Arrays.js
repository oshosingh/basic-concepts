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



/**
 *  Extra Concepts on Index :
 * 
 *  If we have an array with name 
 *      a = [1,2,3,4,5,6]
 *  
 *  1. length of array = a.length
 *  2. Let us call index numbers as i
 * 
 *  3. Index starts from 0 and goes till a.length-1
 * 
 *  4. Can we define index number (i) in form of a mathematical inquality :
 *      
 *      0 <= i < a.length
 *      
 *      In english it is read as, any index of array starts from and goes till a.length
 */


/**
 * Answer these questions:
 *  
 *  var a = [1,2,3,4,5]
 * 
 *  ques 1: what is the value of array at index 2 => a[2] gives 3
 * 
 *  ques 2: What is the value of array which is at an index which is equal to the 
 *          value of array at index 2
 *          
 *          => index = a[2]
 *          => ans = a[index]   final answer = 4
 * 
 *          This can also be written as 
 *          
 *          => ans = a[a[2]]
 * 
 *          
 */


/**
 * Iteration on arrays using Maps:
 *  
 *  1. map is a array method which iterates over all the elements of array 1 by 1 and returns the desired value
 *  2. map accepts an arrow function whose first paramter is value of the array element and second paramter is its index
 *  3. map must return a value
 *  4. the output of map method is an array
 * 
 *  See below example
 */

var a = [1,2,3,4]

// Ask is to double the value of each element and create a new array, Code is as follows

var b = a.map((value, index) => {
    return value*2;
});

// b will have [2,4,6,8]