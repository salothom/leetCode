/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumRun =[]
    let current =0;
    for ( i = 0; i < nums.length; i ++){
        current = current +nums[i]
        sumRun.push(current)
    }
    return sumRun
};