const removeDuplicate = (arr)=>{

let index = 0

for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] > arr[index]){
        index++
        arr[index] = arr[i]
    }
}

return arr.slice(0,index+1)

}

console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))


const removeElement = (arr,val)=>{
let index = 0

for(let i =0 ;  i< arr.length ; i++){
    if(arr[i] != val){
        arr[index] = arr[i]
        index++
    }
}

return arr.slice(0,index)

}

console.log(removeElement([0,1,2,2,3,0,4,2],2))


const stockBuySell = (arr)=>{
    let min = 0
    let maxProfit = 0
    for(let i = 0 ; i<arr.length ; i++){
        let checkProfit = arr[i] - arr[min]
       
        if(maxProfit < checkProfit){
            maxProfit = checkProfit
        }

        if(arr[i]<arr[min]){
            min = i
        }

    }
return maxProfit

}

console.log(stockBuySell([7,1,5,3,6,4]))

const merge_sort_arr = (nums1,m,nums2,n)=>{

    let p1 = m-1
    let p2 = n-1

    for(let i = (m+n)-1 ; i>=0 ; i--){

        if(p2 < 0){
            break
        }

        if(nums1[p1]>nums2[p2] && p1>=0){
            nums1[i] = nums1[p1]
            p1--
        }else{
            nums1[i] = nums2[p2]
            p2--
        }
    }
return nums1
}

console.log(merge_sort_arr([1,2,3,0,0,0],3,[2,5,6],3))


const move_zero = (arr)=>{
    let index = 0

    for(let i = 0 ; i<arr.length ; i++){

        if(arr[i] != 0){
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
            index++
        }
    }

    return arr

}

console.log(move_zero([0,1,0,3,12]))


const max_consecutive_ones = (arr)=>{

    let count = 0
    let maxCount = 0
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] != 0){
            count ++
        }else{
            if(maxCount < count) {
                maxCount = count
            }
            count = 0
        }
    }
return maxCount > count ? maxCount : count
}
console.log(max_consecutive_ones([1,1,0,1,1,1]))

const missing_number = (arr)=>{
    let sum = 0 
    let n = arr.length
    for(let i = 0 ; i<arr.length ; i++){
        sum +=arr[i]
    }

    return (n*(n+1)/2) - sum

}

console.log(missing_number([0,1]))


const singleNumber = (arr)=>{
    let map = {}


    for(let i = 0 ; i<arr.length ; i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }else{
            map[arr[i]] = 1
        }
    }

    for(let key in map){
        if(map[key] === 1){
            return key
        }
    }

}

console.log(singleNumber([4,1,2,1,2]))

const singleNumberOptimized = (arr)=>{
    let val = 0

    for(let i = 0 ; i<arr.length ; i++){
        val ^= arr[i]
    }

    return val
}
console.log(singleNumberOptimized([4,1,2,1,2]))


const fibonacciSeries = (n)=>{
    let a = 0
    let b = 1

    for(let i = 0 ; i<n ; i++){
        console.log(a)

        let next = a+b
        a = b
        b=next
    }


}

fibonacciSeries(10)