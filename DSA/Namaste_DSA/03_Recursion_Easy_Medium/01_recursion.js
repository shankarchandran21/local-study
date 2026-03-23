let index = 1
const recursion = ()=>{
    if(index >= 4){
        return
    }
    index++
    console.log("Hello Shankar")
    recursion()
}

recursion()

const recursionTwo = (num)=>{
    console.log(num)
    if(num <= 0 ){
        return 
    }
    recursionTwo(--num)
}
recursionTwo(5)

const reverseRecursion=(x)=>{

}
reverseRecursion()