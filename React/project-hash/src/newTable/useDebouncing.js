import React, { useEffect, useState } from 'react'

function useDebouncing(searchValue,setPage,duration=500) {
    const [searchQuery,setSearchQuery] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSearchQuery(searchValue)
            setPage(1)
        },duration)

        return ()=>clearTimeout(timer)
    },[searchValue])

  return searchQuery
}

export default useDebouncing
