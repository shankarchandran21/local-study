let n = 5

for(let i = 1 ; i <= n; i++) {
    let row = ''
    for(let j = 1 ; j < n; j++) {
        row += '# '
    }
    console.log(row)
}


for (let i = 1 ; i <= n; i++) {
    let row = ''
    for (let j = 1 ; j <= i; j++) {
        row += '* '
    }
    console.log(row)
}

for (let i = 1 ; i <= n; i++) {
    let row = ''
    for (let j = 1 ; j <= i; j++) {
        row += j + ' '
    }
    console.log(row)
}

let printValue = 1
for (let i = 1 ; i <= n; i++) {
    let row = ''
    printValue = i % 2 == 0 ? 0 : 1
    for (let j = 1 ; j <= i; j++) {
        row += printValue + ' '
        printValue = printValue == 1 ? 0 : 1
    }
    console.log(row)
}


let printValueNum = 1
for (let i = 1 ; i <= n; i++) {
    let row = ''
    for (let j = 1 ; j <= i; j++) {
        row += printValueNum + ' '
        printValueNum++
    }

    console.log(row)

}



for (let i = 1 ; i <= n+1; i++) {
    let row = ''
    for (let j = 1 ; j <= n+1-i; j++) {
        row += '* '
    }
    console.log(row)

}


for (let i = 1 ; i <= n; i++) {
    let row = ''
    for (let j = 1 ; j <= n+1-i; j++) {
        row += n+1-i + ' '
        
    }
    console.log(row)
}

for (let i = 1 ; i <= n; i++) {
    let row = ''
    for (let j =1 ; j <= n+1-i; j++) {
        row += j + ' '
    }
    console.log(row)
}


// ---------------------------------------------------------------------------------------------------------


for (let i = 1 ; i <= n*2-1; i++) {
    let rowFormal = i <= n ? i : n*2 - i
    let row = ''
    for (let j = 1 ; j <= rowFormal; j++) {
        row += '*'
    }
    console.log(row)
}

for (let row = 1 ; row <= n; row++) {
    let printValue = ''
    for  (let space = 1 ; space <= n - row; space++) {
        printValue += ' '
    }
    for (let star = 1 ; star <= row; star++) {
        printValue += '*'
    }
    console.log(printValue)
}

console.log('\n')

for (let row = 1 ; row <= n; row++) {
    let printValue = ''
      for  (let space = 1 ; space <= row-1; space++) {
        printValue += ' '
    }
    for (let star = 1 ; star <= n+1-row; star++) {
        printValue += '*'
    }
  
   
    console.log(printValue)
}

console.log('\n')
for (let row = 1 ; row <= n; row++) {
    let printValue = ''
    for (let star = 1 ; star <= (2*row)-1; star++) {
        printValue += '*'
    }
    for  (let space = 1 ; space <= n - row; space++) {
        printValue = ' ' + printValue
    }
 
    console.log(printValue)
}

console.log('\n')
// --------------------------------------------------------------------------------------------------------

for (let row = 1 ; row <= n; row++) {
    let printValue = ''

    for (let space = 1 ; space <= row-1; space++) {
        printValue += ' '
    }
    for (let star =1 ; star <= (2*(n - row))+1; star++) {
        printValue += '*'
    }
    console.log(printValue)
}
// -----------------------------------------------------------------------------------------------------------------

for (let row = 1 ; row <= n*2-1; row++) {

    let formula = row <= n ? row : n*2 - row
    let printValue = ''

    for (let space = 1 ; space <= n - formula; space++) {
        printValue += ' '
    }

    for (let star = 1 ; star <= (2*formula)-1; star++) {
        printValue += '*'
    }
    console.log(printValue)
}

console.log("\n")


for (let row = 1; row <= (n * 2) - 1; row++) {

    let rowChange = row > n ? (n * 2) - row : row;
    let line = "";

    // spaces
    for (let space = 1; space <= rowChange - 1; space++) {
      line += " ";
    }

    // stars
    for (let col = 1; col <= n - rowChange + 1; col++) {
      line += "* ";
    }

    console.log(line);
  }



  for (let row = 1 ; row<=n ; row++){

    let line = ""

    for(let space = 1;space <= n-row;space++){
        line += " "
    }

    for(let star = 1; star <= (row*2)-1;star++){
        if(star === 1 || star === (row*2)-1 || row === n ){
            line += "*"
        }else{
            line += " "
        }
    }

    console.log(line)

  }

 console.log("_________________________-")
for(let row= n ; row >=1 ; row--){
    let line = ""

    for(let space = 1;space<=n-row;space++){
        line +=" "
    }

    for(let star = 1;star<=2*row-1;star++){
        if(row==n||star == 1 ||2*row-1 == star ){
            line+="*"
        }else{
            line += " "
        }
    }
    console.log(line)
}


for(let row =1 ; row<= 2*n ;row++){
    let formula = row<n ? row : n*2 - row
    let line = ""
    for(let space = 1 ;space<=n-formula;space++){
        line += " "
    }

    for(let star = 1 ; star <= 2*formula-1;star++ ){

        if(star == 1 || star == 2*formula-1){
            line += "*"
        }else{
            line +=" "
        }
    }

    console.log(line)

}


for(let row = 1 ; row <= n ; row++){
    let line = ''
    for(let star = 1 ; star<=n ; star++){

        if(star == 1 || row === 1 || row === n || star === n){
            line += "*"
        }else{
            line += " "
        }
    }
    console.log(line)
}

for(let row = 1; row<=n;row++){

    let line = ""

    for(let space = 1;space<=n-row;space++){
        line += " "
    }

    for(let star = 1;star<=(n+1)-1;star++){
        line +="*"
    }

    console.log(line)



}


for(let row = 1 ; row<= n*2 ; row++){
    let line =""
    for(let star =1;star<=n*2;star++){

        let formula = row>n ?(n*2)-(row-1):row 

        if(star<=n-formula+1 || star>n+formula-1){
            line+="*"
        }else{
            line += " "
        }

    }
    console.log(line)
}

console.log("\n")

for(let row = 1 ; row<=n*2 -1 ; row++){
        let line = ""
        let formula = n>=row?row:(n*2) - row

    for(let star = 1 ; star<=n*2 -1 ; star++){
        
        if(star<=formula || star>=(n*2)-formula){
            line+="*"
        }else{
            line+=" "
        }

    }

    console.log(line)
}


for(let row = 1 ; row<=n ; row++ ){

    let line = ""

    for(let space=1;space<= (n-row);space++){
        line += "  " // two space for alignment
    }

    for(let num = row ; num >=1 ; num--){
        line += num +" "
    }

    for(let num =2;num<=row;num++){
        line += num +" "
    }

    console.log(line)

}


for(let row =1 ; row<= n-1; row++){
    let line = ""
    for(let num = 1 ; num <= row ; num++ ){
        line += num 
    }

    for(let space = 1 ; space<= 2*((n-row)-1) ; space++){
        line += " "
    }

    for(let num = row ; num>=1 ; num--){
        line += num 
    }
    console.log(line)

}




for(let row = 1 ; row<= n*2 -1 ; row++){
    let line = ""
    for(let col =1 ; col<= n*2-1;col++ ){
        let top = row
        let down = (n*2) - row
        let left = col
        let right = n*2 - col
        let minValue =  Math.min(Math.min(top,down),Math.min(left,right))
        
        line += minValue + " " 
    }

    console.log(line)
}

console.log("\n")

for(let row = 1 ; row<= n*2 -1 ; row++){
    let line = ""
    for(let col =1 ; col<= n*2-1;col++ ){
        let top = row
        let down = (n*2) - row
        let left = col
        let right = n*2 - col
        let minValue =  Math.min(Math.min(top,down),Math.min(left,right))
        
        // console.log(`${n}- ${minValue}+1`)
        line += (n-minValue+1) + " " 
    }

    console.log(line)
}