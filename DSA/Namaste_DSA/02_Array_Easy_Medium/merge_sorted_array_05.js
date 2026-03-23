const merge_Sorted_Array_Approach_one = (nums1, m, nums2, n) => {

    let num1Copy = nums1.slice(0, m)

    let p1 = 0
    let p2 = 0

    for (let i = 0; i < m + n; i++) {

        if(p2>=n||(p1<m && num1Copy[p1]< nums2[p2])){
            nums1[i] = num1Copy[p1]
            p1++
        }else{
            nums1[i] = nums2[p2]
            p2++
            
        }
    }

    console.log(nums1)
}

merge_Sorted_Array_Approach_one ([1], 1, [], 0)


const testOne = (num1,m,num2,n) => {
    let num1Copy = num1.slice(0, m)

    let p1 = 0
    let p2 = 0

    for (let i = 0; i < m + n; i++) {

        if(p2 >= n || (p1 < m && num1Copy[p1] < num2[p2])){
            num1[i] = num1Copy[p1]
            p1++
        }else{
            num1[i] = num2[p2]
            p2++
        }

    }
return num1

}

console.log(testOne([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(testOne([1], 1, [], 0))


const approachTwoOptimized = (num1,m,num2,n) => {
let p1 = m - 1
let p2 = n - 1

for (let i = m + n - 1; i >= 0; i--) {
    
    if(p2 < 0) {
        break
    }
    if((p1 >= 0 && num1[p1] > num2[p2]) ){
        num1[i] = num1[p1]
        p1--
    }else{
        num1[i] = num2[p2]
        p2--
    }
}

return num1
}

console.log(approachTwoOptimized([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(approachTwoOptimized([1], 1, [], 0))


const testOneOptimized = (num1,m,num2,n) => {
    let p1 = m - 1
    let p2 = n - 1

    for(let i=m+n-1 ; i>=0 ; i--){

        if(p2< 0){
            break
        }

        if(num1[p1]>num2[p2]&& p1>=0){
            num1[i] = num1[p1]
            p1--
        }else{
            num1[i] = num2[p2]
            p2--
        }

    }

    return num1
}

console.log(testOneOptimized([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(testOneOptimized([1], 1, [], 0))

