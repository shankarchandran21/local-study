const starPattern = (n)=>{

    for(let row = 0 ; row<n ; row++){
         let print = ""
        for(let star = 0 ; star< n ; star++){
            print += "*"
        }
        console.log(print)
    }   

}

starPattern(4)


const patternA = (n)=>{
    for(let row = 1; row<=n ; row++){
        let print = ""
        for(let star = 1; star<=row; star++){
            print += "*"
        }
        console.log(print)
    }
}

patternA(5)

const patternB = (n)=>{
for(let i = 1; i<=n ; i++){
    let print = ""
    for(let j = 1; j<=i ; j++){
        print += j
    }
    console.log(print)
}
}

patternB(5)

const patternE = (n)=>{
    for(let row=1;row<=n;row++){
        let print=""
        
        let reminder = row & 1 // odd 1 even 0
        for(let star = 1;star<=row;star++){
            print += reminder
            reminder = reminder === 0 ? 1 : 0
        }
        console.log(print)
    }
}

patternE(5)

const patternF = (n)=>{
    let reminder = 0
    for(let i =1 ; i<=n ; i++){
        let print = ""
        for(let j = 1 ; j<=i ; j++){
            reminder ++
            print += reminder
        }
        console.log(print)
    }
}

patternF(5)

const patternG = (n)=>{

    for(let row = 1; row<=n ; row++){
        let print = ""
        for(let star = row; star<=n ; star++){
            print += "*"
        }
        console.log(print)
    }

}
patternG(5)

const patternH=(n)=>{
    for(let row = 1; row<=n ; row++){
        let print = ""
        for(let star = row; star<=n ; star++){
            print += n+1-row
        }
        console.log(print)
    }
}

const patternJ = (n)=>{
    for(let row = 1 ; row<= n*2-1 ; row++){
        let print = ""
        let formula = row<= n ? row : n*2-row
        for(let star = 1 ; star <= formula ; star++){
            print += "*"
        }
        console.log(print)
    }
}

patternJ(5)


const patternK = (n)=>{
    for(let row =1 ; row<=n ; row++){
        let print = ""

        for(let space =1 ; space <= n-row ; space++){
            print += " "
        }

        for(let star = 1 ; star <= row ; star++){
            print += "*"
        }

        console.log(print)
    }
}
patternK(5)

const patternL = (n)=>{
for(let row = 1; row<=n ; row++){
    let print = ""

    for(let space = 1; space <= row-1; space++){
      
        print += " "
    }

    for (let star = 1; star <= (n+1)-row; star++){
        print += "*"
    }
    console.log(print)
}
}

patternL(5)

const patternNumSwitch = (n)=>{

    
    for(let row = 1; row<=n ; row++){
        let switchValue = 1
        let print = ""

        for(let num = 1 ; num <= row ; num++){
            print += switchValue
            switchValue = switchValue === 0 ? 1 : 0
        }
        console.log(print)
    }
}
 patternNumSwitch(5)
