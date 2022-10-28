/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
   let noduplicates= nums.length === new Set(nums).size
    return !noduplicates
};