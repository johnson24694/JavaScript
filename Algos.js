
//Remove Element challenge from leetcode
// https://leetcode.com/problems/remove-element/

//the objective here is to remove values equal to 'val' from an array in place and return variable k, which is amount of values that do not equal 'val'.

// var removeElement = function(nums, val) {
//     for (let k = 0; k < nums.length; k++) {
//         if (nums[k] == val) {

//             nums.splice(k, 1);
//             k--
//         }
//     }
//     let k = nums.length
//     return k

// };


// var removeElement = function(nums, val) {
//     let k=0;
//     for( let i = 0; i<nums.length; i++){
//         if(nums[i] == val ){
//             nums.splice(i, 1);
//             i--;
//         } else if(nums[i] != val) {
//             k +=1;
//         };
//     };
//     return k;
// };