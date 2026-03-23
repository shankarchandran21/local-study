import React, { useEffect, useRef, useState } from 'react'

function UseThrottlesetup <T>(value:T,delay= 1000):T {

const [throttledValue,setThrottledValue] = useState<T>(value)
const track = useRef(Date.now())

useEffect(()=>{
    
const handler =  setTimeout(()=>{
        const now = Date.now()
        const timeElapsed = now - track.current


        if(timeElapsed>= delay){

         console.log(`NOw : ${now} `)
        console.log(`TimeElapsed : ${timeElapsed}`)
        console.log(`Delay : ${delay - (Date.now() - track.current)}`)
        
            setThrottledValue(value)
            track.current = now;
            
        }
    },delay - (Date.now() - track.current ))

    return ()=>{
        clearTimeout(handler)
    }
},[value,delay])


  return throttledValue
}

export default UseThrottlesetup