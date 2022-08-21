// Given an array of integers; and an integer, k; 
//return an array; 
// with two distinct elements i, j; such that i+j=k;
/**
 * Inputs:
 * @param {number[]} arr
 * @param {number} targetSum
 *
 * Outputs:
 * Empty array, no matches | []
 * Array with tuple, matches criteria | [i, j]
*/
const twoNumberSum = (arr, targetSum) => {
    
    let potentialValues = new Map();
    
    for(let i=0; i < arr.length ; i++){
        let d = targetSum - arr[i];

        let found = potentialValues.get(arr[i]);
        if(found!=undefined){
            return [d, arr[i]];
        }
        potentialValues.set(d, arr[i]);
    }

    return [];

};

let numberSum = { twoNumberSum };

module.exports = numberSum;



