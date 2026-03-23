const bubbleSort = (arr) =>{

    for(let i = 0 ; i<arr.length - 1 ; i++){
            let isSwap = false
            console.log(i)
        for(j = 0 ; j<arr.length  - (i+1)  ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                isSwap = true
            }
            

        }   
            if(!isSwap){
                break
            }
    }
return arr
}

console.log(bubbleSort([1,2,3,4]))
console.log(bubbleSort([5,2,4,1,8,9,3,2,7]))