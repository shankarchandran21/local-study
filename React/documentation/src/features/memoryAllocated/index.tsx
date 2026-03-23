import { useRef, useState } from "react";
import Tabs from "./components/tabs"
import MemoryManagement from "./components/memoryManagement";
import InDepthMemoryManagement from "./components/inDepthMemoryManagement";

function Index() {
const [active,setActive] = useState(1);
const tabRef = useRef<(HTMLButtonElement | null)[]>([])
const sliderRef = useRef<HTMLDivElement|null>(null);

const handleActive =(val:number)=>{
  if(val){
    setActive(val);
  }
}

  return (<div>
    <Tabs active={active} handleActive={handleActive} tabRef={tabRef} sliderRef={sliderRef}/>
    <div>
        {active === 1?<MemoryManagement/>:<InDepthMemoryManagement/>}
    </div>
  </div>
  )
}

export default Index

