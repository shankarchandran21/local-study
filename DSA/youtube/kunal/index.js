// Armstrong Number

const AMSN = (n)=>{
    let power = 0
    let tempN = n
    
    while(tempN > 0){
        tempN = parseInt(tempN/10)
        power++
    }
    let ans = 0
    while(n>0){
        let digit = n%10
        let multi = 1
        for(let i = 1 ; i<=power ; i++){
            multi *= digit
        }
        ans += multi
        n  = parseInt(n/10)
    }

console.log(ans)

}

AMSN(153)


const areaCircle = (r)=>{

    return Math.PI * (r*r)
}

function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(areaOfTriangle(10, 5)); // Example
