const move_zero_own_approach = (arr) => {

    let index = 0

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] !== 0){
            let temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
            index++
        }
    }

    return arr
}

console.log(move_zero_own_approach([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]


const move_zero_video_approach = (arr) => {

    let index = 0
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] !== 0){
            arr[index] = arr[i]
            index++
        }
    }

    for(let i=index ; i<arr.length ; i++){
        arr[i] = 0
    }

    return arr
}

console.log(move_zero_video_approach([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]