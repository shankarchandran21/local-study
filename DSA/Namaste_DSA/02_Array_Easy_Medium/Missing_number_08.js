var missingNumber = function(nums) {
        let sum = 0
        let n= nums.length
        formula = (n*(n+1))/2

    for(let i = 0 ; i<nums.length ; i++){
            sum +=nums[i]
    }

    ans = formula - sum

    return ans
};

console.log(missingNumber([3,0,1]))//2
console.log(missingNumber([0,1]))//2