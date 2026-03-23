function reverseString (str:string){
    
   let arr = str.split('')
    let left = 0
    let right = arr.length -1

    while(left < right){

        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++;
        right --;
    }

    return arr.join("")
}

console.log(reverseString('mam mam'))

function reverseStringTwo (str:string){
    let rev =""
    for(let i = str.length -1 ; i>= 0 ; i-- ){
        
        rev +=str[i]
    }
console.log(rev)
    return rev
}

console.log(reverseStringTwo('mam mam'))
