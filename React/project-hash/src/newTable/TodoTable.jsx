import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './Table'
import useDebouncing from './useDebouncing'

function TodoTable() {
const [listOfData,setListOfData] = useState([])
const [storeData,setStoreData] = useState([])
const [searchInput,setSearchInput] = useState('')
const [total,setTotal] = useState(0)
    const itemPerPage = 5
    const [page,setPage] = useState(1)
const searchQuery = useDebouncing(searchInput,setPage)
useEffect(()=>{
    (async()=>{
        const skip = (page -1) * itemPerPage
       try {
            const res = await axios.get(`https://dummyjson.com/users?limit=${itemPerPage}&skip=${skip}&searchquery=${searchQuery}`)
            setListOfData(res.data.users)
            setStoreData(res.data.users)
            setTotal(res.data.total)
       } catch (err) {
        console.log(err)
       }
    })()
},[page,searchQuery])

// useEffect(()=>{
//     const filterData = storeData.filter(({firstName})=>firstName.toLowerCase().includes(searchQuery.toLowerCase()))
//     setListOfData(filterData)
//     if(searchQuery === ''){
//         setListOfData(storeData)
//     }
// },[searchQuery])

  return (
    <div>
      <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder='Search Filter'/>
      <Table 
        listOfData={listOfData}
        page={page}
        setPage={setPage}
        total={total}
        itemPerPage={itemPerPage}
      />
    </div>
  )
}

export default TodoTable
