
const insertionSort = (arr)=>{

    for(let i = 1 ; i< arr.length ; i++){

        let current = arr[i]
        let prev = i-1

        while(current< arr[prev] && prev >=0){

            arr[prev+1] = arr[prev]
            prev--
        }
        arr[prev+1] = current
    }
return arr
}

console.log(insertionSort([5,4,3,2,1]))