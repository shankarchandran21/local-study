const selectionSort = (arr)=>{

for(let i = 0 ; i<arr.length-1 ; i++){
    let min = i

for(let j= i+1 ; j < arr.length  ; j++){
    console.log(j)
        if(arr[min]> arr[j]){
            min = j

        }
}

if(min != i){
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
}
console.log(arr)

}

return arr
}

console.log(selectionSort([7,1,5,4,3,2]))