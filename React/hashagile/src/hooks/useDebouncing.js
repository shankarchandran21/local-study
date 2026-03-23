import React, { useEffect, useState } from 'react'

function useDebouncing(value,duration=500) {

    const [query,setQuery] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setQuery(value)
        },duration)

        return()=>clearTimeout(timer)
    },[value])

  return query
}

export default useDebouncing

