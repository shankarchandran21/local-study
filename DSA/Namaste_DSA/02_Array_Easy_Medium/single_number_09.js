const single_number_first_Approach  = (nums) => {
    let ans = {}

    for(let i=0 ; i<nums.length ; i++){
        if(ans[nums[i]]){
            ans[[nums[i]]]++
        }else{
            ans[nums[i]] = 1
        }
    }
for(let key in ans){
    if(ans[key] === 1){
        return Number(key)
    }
}
}

console.log(single_number([4,1,2,1,2])) // 4


const secondApproach = (nums)=>{
        let val = nums[0]
    for(let i = 1 ; i<nums.length ; i++){
        val ^= nums[i]
    }

    return val
}

console.log(secondApproach([4,1,2,1,2]))