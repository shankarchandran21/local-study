//  Find the maximum element
type ArrProps = number[]
function findMax(arr:number[]){

    let max = arr[0]
// 7
    for(let  i = 1 ; i< arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    return max

}

console.log(findMax([2,3,8,1,9,4,20]))

// Reverse Array 

function reverseArray (arr:number[]){

    let left = 0
    let right = arr.length -1

    while(left < right){
 
    

        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++;
        right --;
    }

    return arr
}

console.log(`Reverse Array ${reverseArray([1,2,3,4,5])}`)

// Find Max number

function MaxNum (arr:ArrProps){
    let max = arr[0]

    for(let val of arr){
        if(val > max){
            max = val
        }
    }
    return max
}

console.log(`FindMaxValue : ${MaxNum([2,4,9,20,44])}`)

// Sum of all the elements

function sumOfAll(arr:ArrProps){
    let sum = 0;
    for(let val of arr){
        sum +=val
    }
    return sum
}

console.log(`SumOfAllTheElements : ${sumOfAll([1,2,3,4,5])}`)


// Count even and odd

function oddAndEvenCount (arr:ArrProps){
    let even = 0
    let odd = 0
    for(let val of arr){
        if(val % 2 === 0){
            even ++
        }else{
            odd ++
        }
    }
    console.log({even,odd})
    return {even , odd}
}

console.log(`ODD_EVEN_COUNT : ${oddAndEvenCount([2,3,4,58,6])}`)

function SecondLargeElement (arr:ArrProps){
        let first = -Infinity 
        let second = -Infinity

        for(let val of arr){
            if(val > first){
                second = first
                first = val
            }else if (val > second && first> val){
                second = val
            }
        }

        return second
}

console.log(`SECOND_LARGE_NUMBER ${SecondLargeElement([2,4,6,8,9,20,40,30])}`)


function RemoveDuplicates(arr:ArrProps){

    let unique:number[] = []
    for(let val of arr ){
        if(!unique.includes(val)){
            unique.push(val)
        }
    }
    return unique
}

console.log(`REMOVE_DUPLICATES : ${RemoveDuplicates([2,2,45,3,45,9,3,9])}`)

function findMissingNumber(arr:ArrProps,n:number){

    let addValue = n * (n + 1) / 2 
    let arrAddvalue = arr.reduce((a,b)=>a+b,0)

    return addValue - arrAddvalue

}

console.log(`MISSING NUMBER : ${findMissingNumber([1,2,4,5],5)}`)

function twoSum (arr:ArrProps,target:number){
    let map:any ={}
  for(let i = 0 ; i< arr.length ; i++){
    let com = target - arr[i]
        if(map[com] !== undefined){
            return [map[com],i]
        }else{
            map[arr[i]] = i
        }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 17))

function threeSum(arr:number[],target:number){

  const sortArr = arr.sort((a,b)=> a - b)  // Step 1: Sort the array

  for(let i = 0 ; i< sortArr.length -2 ; i++){  // Step 2: Loop until 3rd last element

    let left = i+1                // Step 3: Pointer just after i
    let right = sortArr.length -1 // Step 4: Pointer at the end

    while(left < right){
      const sum = sortArr[i] + sortArr[left] + sortArr[right]  // Step 5: Calculate triplet sum

      if(sum === target){
          return true   // ✅ Found a triplet
      }else if(sum < target){
        left ++        // If sum is small, move left pointer to get a bigger number
      }else{
        right --       // If sum is large, move right pointer to get a smaller number
      }
    }
  }

  return false   // ❌ No triplet found
}




function twoSumCheck (arr:number[],target:number){
    let map:any ={}

    for(let i = 0 ; i<arr.length ; i++){
        let com = target -arr[i]
        console.log(com)

        if(map[com] != undefined){
            return [map[com],i]
        }else{
            map[arr[i]] = i
        }
    }
    console.log(map)
    return false
}

console.log(twoSumCheck([2, 7, 11, 15], 17))


function threeSumCheck(arr:number[],target:number){

    let sortArr = arr.sort((a,b)=>a - b)
    for(let i = 0  ; i<sortArr.length - 2 ; i++){
        let left = i +1 ;
        let right = sortArr.length -1 

        while(left < right){
            let sum = sortArr[i] + sortArr[left] + sortArr[right]
            
            if(sum === target){
                return true
            }else if (sum < target){
                left ++
            }else{
                right --
            }
        }

    }
}

console.log(threeSumCheck([2, 7, 11, 5], 14))

