function patternPrint(n:number){
    for(let i = 1 ; i<= n ; i++){
        console.log("*".repeat(i))
    }
}

// patternPrint(5)

function patternPrintReverse (n:number){
    for(let i = n ; i>= 1 ; i--){
        console.log('*'.repeat(i))
    }
}

// patternPrintReverse(5)


function trianglePattern(n:number){
    for(let i = 1 ; i<=n ; i++ ){
        const space = " ".repeat(n - i)
        const star = "*".repeat(i * 2 - 1)
        console.log(`${space}${star}`)
    }
}

// trianglePattern(5)

function diamondPattern (n:number){
    for(let i =1 ; i<= n ; i++){
        const space = " ".repeat(n-i)
        const star = "*".repeat(i * 2 -1)
        console.log(space,star)
    }

    for(let i = n ; i>=1;i--){
         const space = " ".repeat(n-i)
        const star = "*".repeat(i * 2 -1)
        console.log(space,star)
    }
}

// diamondPattern(5)

function numberTriangle(n:number) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// numberTriangle(5);
