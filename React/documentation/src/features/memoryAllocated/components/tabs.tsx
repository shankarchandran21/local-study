import { useEffect,} from "react";
import type { TabProps } from "../../../types";

function Tabs({active,handleActive,tabRef,sliderRef}:TabProps) {



useEffect(()=>{
    const btn = tabRef.current[active-1]
    console.log(btn)
    if(btn && sliderRef.current){
        console.log(btn.offsetWidth)
        console.log(btn.offsetLeft)
        sliderRef.current.style.width = `${btn.offsetWidth}px`;
        sliderRef.current.style.left = `${btn.offsetLeft}px`;
    }
},[active])

  return (
    <div className="flex gap-5 relative p-2 w-fit">
        <button className={`font-semibold cursor-pointer transition-color duration-500 ${active === 1 && "text-gray-400"}`} ref={e=>{tabRef.current[0] = e}} onClick={()=>handleActive(1)}>
                Memory Management
        </button>
        <button className={`font-semibold cursor-pointer transition-color duration-500 ${active === 2 && "text-gray-400"}`} ref={e=>{tabRef.current[1] = e}} onClick={()=>handleActive(2)}>
            Memory Management inDepth
        </button>
        <div ref={sliderRef} className="absolute bottom-2 w-0 rounded-2xl bg-green-500 h-0.5 transition-w duration-300"/>
    </div>
  )
}

export default Tabs
