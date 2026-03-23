import React, { useEffect, useState } from 'react'

function Debouncing(query) {
    const [searchQuery,setSearchQuery] = useState('')
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSearchQuery(query)
        },500)

        return ()=>clearTimeout(timer)
    },[query])
  return searchQuery 
}

export default Debouncing