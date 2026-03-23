import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Home() {
    const [value,setValue] = useState("")
    const [searchFilter,setSearchFilter] = useSearchParams()
    const filter = searchFilter.get("filter") || ""

const handleFilterChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value)
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
        if(value){

            setSearchFilter({filter:value})
        }else{
            setSearchFilter({})

        }
    },500)

    return ()=>{
        clearTimeout(timer)
    }
  },[value])

  useEffect(()=>{
    console.log("APIIIII calllll")
  },[filter])


  console.log(filter)
  return (
    <div>
         <input
        type="text"
        placeholder="Filter products..."
         onChange={handleFilterChange}
         value={value}
      />
    </div>
  )
}

export default Home