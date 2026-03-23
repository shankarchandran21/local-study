// import {useState,useEffect} from 'react'
// import axios from 'axios'
import './App.css'
import Table from "./components/Table"
import Debouncing from './components/Debouncing'
import TodoTable from './newTable/TodoTable'
function App() {
//  const [userList,setUserList] = useState([])
//  const [filterList,setFilterList] = useState([])
//  const [searchQuery,setSearchQuery] = useState('')
//  const query = Debouncing(searchQuery)

//  useEffect(() => {
//   (async()=>{
//     const res = await axios.get('https://dummyjson.com/users')
//     setUserList(res.data.users)
//     setFilterList(res.data.users)
//   })()
//  }, []);

//  useEffect(()=>{
//   if(!query){
//     setFilterList(userList)
//     return
//   }

//     const filterQuery = userList.filter(({firstName})=>firstName.toLowerCase().includes(query))
//     setFilterList(filterQuery)
//  },[query])




  return (
    <>
    {/* <input value={searchQuery} placeholder='Search User' onChange={(e)=>setSearchQuery(e.target.value)}/>
     <Table  userList={filterList}/> */}
     <TodoTable/>
    </>
  )
}

export default App
