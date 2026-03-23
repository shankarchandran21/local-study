import React, { useEffect, useState } from 'react'
import DebouncingSetup from './DebouncingSetup'

function Debouncing() {
    const [query,setQuery] = useState('')
    const debouncing =  DebouncingSetup(query)

    console.log(debouncing)

    useEffect(()=>{
        console.log("APIIII call")
    },[debouncing])
  return (
    <div>
            <input value={query} placeholder='type something...!!!' onChange={(e)=>setQuery(e.target.value)} />
    </div>
  )
}

export default Debouncing