
// https://leetcode.com/problems/longest-common-prefix

// Solution 1: 
var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return prefix;

            }
        }
        prefix += strs[0][i];
    }
    return prefix;
};

// Solution 2: 
var longestCommonPrefix = function(strs) {
    let result = strs[0].length
    for(let i = 1; i < strs.length; i++){
        if(result === 0) {break}
        const word = strs[i]
        let counter = 0
        for(let j = 0; j < word.length; j++) {
            if(word[j] === strs[0][j]) {
                counter++
            } else {
                break
            }
        }
        result = (counter < result) ? counter : result
    }
    if(!result) {
        return ''
    } else {
        return strs[0].slice(0,result)
    }
};

//test array 
let strs = ["flower", "flow", "flight"]


