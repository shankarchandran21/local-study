
const patternA =(n)=>{
    for(let row=1;row<=n;row++){
        let print=""       
        for(let star = 1;star<=n;star++){
            print += "*"
        }
        console.log(print)
    }
}

patternA(5)


const patternB=(n)=>{
    
    for(let row =1;row<=n;row++){
        let print =""
        for(let star = 1;star<=n;star++){
            print += row
        }

        console.log(print)
    }

}

patternB(5)

const PatternC = (n)=>{
    for(let row = 1 ; row<=n ; row++){
        let print = ""

        for(let star = 1;star<=row;star++){
             print +="*"
        }
        console.log(print)
    }
}

PatternC(5)


const patternD =(n)=>{
    for(let row = 1; row<= n ; row++){
        let print = ""
        for(let star = 1 ;star<=row;star++){
            print +=star
        }
        console.log(print)
    }

}

patternD(5)

const patternE=(n)=>{
    let remind=1
    for(let row=1;row<=n;row++){
        let print=""
        remind = row%2 == 0 ? 0 :1
        for(let star=1;star<=row;star++){
            print+=remind
            remind = remind==1?0:1 
        }
        console.log(print)
    }
}
patternE(5)

const patternF = (n)=>{
    let remind = 0
    for(let row=1 ; row<=n ; row++){
        let print =""
        for(let star =1;star<=row;star++){
            ++remind
            print +=remind + " "
        }
        console.log(print)
    }
}
patternF(5)

const patternG =(n)=>{
    for(let row = 1 ; row<=n ; row++){
        let print = ""
        for(let star = 1 ; star <= n+1-row;star++){
            print +="* "
        }
        console.log(print)
    }
}

patternG(5)


const patternH =(n)=>{
    for(let row = 1 ; row<=n ; row++){
        let print = ""

        for(let star = 1;star<=n+1-row;star++){
            print +=n+1-row + " "
        }

        console.log(print)
    }
}

patternH(5)


const patternI = (n)=>{
    for(let row = 1; row<= n ; row++){
        let print =""
        for(let star = 1 ; star<= n+1-row ; star++){
            print +=star
        }
        console.log(print)
    }
}
patternI(5)


const patternJ = (n)=>{

    for(let row =1;row<=n*2-1;row++){
        let print = ""
        let formula = row>n?n*2-row:row
        for(let star=1;star<=formula;star++){
            print+="*"
        }
        console.log(print)
    }

}
patternJ(5)


const patternK =(n)=>{
    
    for(let row = 1 ; row<=n;row++){
        let print = ""

        for(let space = 1;space<=n-row;space++){
            print += " "
        }

        for(let star = 1;star<=row;star++){
            print +="*"
        }
        console.log(print)
    }
}
patternK(5)

const patternL =(n)=>{
    
    for(let row = 1 ; row<=n;row++){
        let print = ""

        for(let space = 1;space<=row-1;space++){
            print += " "
        }

        for(let star = 1;star<=n+1-row;star++){
            print +="*"
        }
        console.log(print)
    }
}
patternL(5)


const patternM =(n)=>{
    for(let row = 1 ; row<=n;row++){
        let print = ""
        for(let space =1 ; space <= n-row ;space++){
            print += " "
        }
        for(let star = 1 ; star<=row * 2-1 ; star++){
            print += "*"
        }
        console.log(print)
    }
}
patternM(5)


const patternN = (n)=>{

    for(let row = 1; row<=n ; row++){
        let print = ""

        for(let space = 1; space<=row-1;space++){
            print += " "
        }

        for(let star = 1; star<=2*(n-row)+1;star++){
            print +="*"
        }

        console.log(print)
    }


}

patternN(5)


const patternO=(n)=>{
    for(let row = 1 ; row<=n*2-1;row++){
        let print = ""

        let formula = n>=row ?row : 2*n-row

        for(let space = 1;space<=n-formula;space++){
            print += " "
        }

        for(let star =1;star<=(formula*2)-1;star++){
            print +="*"
        }

        console.log(print)
    }
}
patternO(5)


const patternP =(n)=>{
    for(let row=1 ; row<=n*2 ; row++){
        let print =""

        let formula = n>=row ? row : ((2*n)-row)+1

        for(let space = 1 ; space<=formula-1;space++){
            print +=" "
        }

        for(let star = 1;star<=n+1-formula;star++){
            print += "* "
        }
        console.log(print)
    }
}

patternP(5)

const patternQ = (n)=>{

    for(let row = 1 ; row<=n ; row++){
        let print = ""
        for(let space=1;space<=n-row;space++){
            print += " "
        }

        for(let star=1;star<=2*row-1;star++){
            if(star == 1 || star == 2*row-1 || row == n){
                print +="*"
            }else{

                print += " " 
            }
        }

        console.log(print)
    }

}

patternQ(5)


const patternR=(n)=>{
    for(let row =1; row<=n;row++){
        let print = ""

        for(let space = 1; space<= row-1; space++){
            print +=" "
        }

        for(let star = 1 ; star<= 2*(n-row)+1;star++){
            if(row == 1 || star == 1 || star== 2*(n-row)+1){
                print +="*"
            }else{
                print +=" "
            }
        }
        console.log(print)
    }
}

patternR(5)

const patternS = (n)=>{

    for(let row = 1 ; row<=2*n-1 ; row++ ){
        let print = ""
        let formula = n>= row ? row : 2*n-row

        for(let space = 1 ; space <= n-formula ; space++){
            print +=" "
        }

        for(let star = 1 ; star <= 2*formula-1; star++){

            if(star == 1 || star == 2*formula-1){
                print +="*"
            }else{
                print +=" "
            }
        }
        console.log(print)
    }

}

patternS(5)

const patternT = (n)=>{

    for(let row = 1 ; row<= n ; row++){
        let print = ""
        
        for(let star = 1 ; star<= n ; star++){

            if(star == 1 || star == n || row == 1 || row == n){
                print +="*"
            }else{
                print +=" "
            }
        }
        console.log(print)
    }
}
patternT(5)


const patternU = (n)=>{
    for(let row = 1 ; row<= n ; row++){
        let print = ""
        for(let space = 1 ; space<= n-row ; space++){
            print +=" "
        }
        for(let star = 1 ; star<= n ; star++){
            if(row == 1 || row == n || star == 1 || star == n){
            print +="*"
            }else{
                print +=" "
            }
        }
        console.log(print)
    }
}
patternU(5)


const patternV = (n)=>{

    for(let row = 1 ; row<= n*2 ; row++){
        let formula = n>= row ? row : n*2-row+1
        let print = ""
        for(let star = 1 ; star <= n*2 ; star++){
            if(star <= (n+1)-formula || star> (n+formula-1)){
                print +="*"
            }else{
                print +=" "
            }
        }
        console.log(print)
    }

}
patternV(5)


const patternW=(n)=>{
    for(let row = 1 ; row<= n*2-1 ; row ++){
        let print = ""
        let formula = n>=row ? row : (n*2)-row
        for(let star = 1 ; star<= n*2-1 ; star++){
            if(star<=formula || star>=(2*n)-formula){
                print +="*"
            }else{
                print+=" "
            }
        }
        console.log(print)
    }
}

patternW(5)


const patternX = (n)=>{

    for(let row =0 ; row <=n ; row++){

        let print = ""

        for(let space=1;space<= n-row;space++){
            print += " "
        }


        for(let firstNum = row ; firstNum>1 ; firstNum-- ){
            print +=firstNum
        }
        for(let lastNum = 1 ; lastNum <= row ; lastNum++ ){
            print += lastNum
        }
        console.log(print)
    }

}
patternX(5)

const patternY = (n)=>{

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


}
patternY(5)


const patternZone = (n)=>{
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
}

patternZone(5)

const patternZTwo = (n)=>{
    for(let row = 1 ; row<= n*2 -1 ; row++){
    let line = ""
    for(let col =1 ; col<= n*2-1;col++ ){
        let top = row
        let down = (n*2) - row
        let left = col
        let right = n*2 - col
        let minValue =  Math.min(Math.min(top,down),Math.min(left,right))
        
        line += n-minValue+1
    }

    console.log(line)
}
}

patternZTwo(5)