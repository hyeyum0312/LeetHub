/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
        for (let idx = 0; idx < nums.length; idx++) {
            let current = nums[idx];
            let data = target - current;

            console.log(data)
            if (data in map) {
                return [idx, map[data]];
            } else {
                map[current] = idx;
            }
        }
};