const max_consecutive_ones = function(nums) {

    let count = 0
    let maxCount = 0
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] == 1){
            count++
        }else{
            if(count > maxCount){
                maxCount = count
            }
            count = 0
        }
    }


    return count > maxCount ? count : maxCount

}

console.log(max_consecutive_ones([1,1,0,1,1,1]))//3
console.log(max_consecutive_ones([1,0,1,1,0,1]))//2