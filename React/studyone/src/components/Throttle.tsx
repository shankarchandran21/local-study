import { useEffect, useState } from "react"
import UseThrottlesetup from "./useThrottlesetup"


interface windowSize {
    width: number,
    height: number
}

function Throttle() {
const  [windowSize,setWindowSize] = useState<windowSize>({
    width:window.innerWidth,
    height:window.innerHeight,
})




const handleResize = ()=>{
    setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight,
    })
}

const throttleValue = UseThrottlesetup(handleResize,1000)


useEffect(()=>{
    window.addEventListener('resize',throttleValue)

    return ()=>{
         window.removeEventListener('resize',throttleValue)
    }
},[])


  return (
    <div>
        <h1>Width : {windowSize.width}</h1>
        <h1>height : {windowSize.height}</h1>
    </div>
  )
}

export default Throttle