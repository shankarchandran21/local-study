import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchfilterDebouncing <T extends string>(searchQuery:T,delay=500) {

const [searchParams,setSearchParams] = useSearchParams()
    
useEffect(()=>{
  const timer = setTimeout(()=>{
    if(searchQuery){
        setSearchParams({searchQuery})
    }else{
       setSearchParams({})
    }
  }
  ,delay)

  return ()=>{
    clearTimeout(timer)
  }
},[searchQuery])
  return searchParams
}

export default SearchfilterDebouncing