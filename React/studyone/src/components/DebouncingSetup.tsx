import React, { useEffect, useState } from 'react'

function DebouncingSetup<T>(query: T,delay=500):T {

  const [debouncingQuery,setDebouncingQuery] = useState(query)

    useEffect(()=>{

        const timer = setTimeout(()=>{
            setDebouncingQuery(query)
            console.log(query)
            console.log(debouncingQuery)
        },delay)

        return ()=>{
            clearTimeout(timer)
        }

    },[query])
  return debouncingQuery
}

export default DebouncingSetup