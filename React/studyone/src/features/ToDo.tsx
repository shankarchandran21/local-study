import React, { useEffect, useRef, useState } from 'react'
import Title from './components/Title'
import SearchField from './components/SearchField'
import SearchfilterDebouncing from './components/searchfilterDebouncing'
import { data } from './data'
import Table from './components/Table'
import type { Category, Task, TaskData } from './type'
import type { ButtonUpDown } from '../featureTwo/type'


function ToDo() {
const [searchQuery,setSearchQuery] = useState('') // searchQuery
const addTask = useRef<HTMLInputElement>(null) // addTask
const [list,setList] = useState<TaskData>(data)

// setup debouncing for search input
const searchFilter  =  SearchfilterDebouncing(searchQuery,500)

// change event for search filter
const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  const {value} = e.target
  setSearchQuery(value)
}

// filter the array depends on SearchQuery
useEffect(()=>{
  
  let queryVal = searchFilter.get('searchQuery')|| ""
  if(!queryVal){
    // setList(data)
    return
  }

  const filtered = Object.fromEntries(
    Object.entries(data).map(([key,tasks])=>[
      key,
      tasks.filter(({title})=>title.toLowerCase().includes(queryVal.toLowerCase()))
    ])
  ) as TaskData

  setList(filtered)
  console.log(filtered)


},[searchFilter.get('searchQuery')])

const handleChangeStatus = (value:string,category:Category,id:number)=>{

  

   setList((prev) =>{

    const getUpdatedTask = prev[category].find((props)=>props.id === id)

    if(!getUpdatedTask) return prev

    console.log(getUpdatedTask)
    const removeFromOldCategory = prev[category].filter((props)=>props.id !== id)

    
    let toCategory: Category;
    if (value === "completed") toCategory = "Completed";
    else if (value === "pending") toCategory = "Pending";
    else toCategory = "InProgress";
    const updatedTask= {... getUpdatedTask,status:value,id:prev[category].length+1}
    
      return {...prev,[category]:removeFromOldCategory,[toCategory]: [...prev[toCategory], updatedTask]}
   } )
}

const handleAddTask =()=>{
  console.log("INNNn")
  const newTask:Task={
    id: list.Pending.length +1,
    title: addTask.current?.value as string,
    status:"pending"
  }
  setList((prev)=>{
    return {...prev,Pending:[ newTask,...prev.Pending]}
  })
}

const handleUpDownTask = (index:number,type:ButtonUpDown)=>{

}

  return (
    <div className='w-full'>
      <Title title={"TODO"}/>
      <div style={{padding:"20px"}}>
          <div className='flex justify-around'>
              <SearchField placeholder='Search Task' name='searchQuery'  value={searchQuery} onChange={handleChange}/>
              <div>
                   <input placeholder='Add Task' ref={addTask}/>
                   <button onClick={handleAddTask}>AddTask</button>
              </div>

          </div>
          <div className='p-10'>
              <Table handleUpDownTask={handleUpDownTask}  handleChangeStatus={handleChangeStatus} data={list}/>
          </div>
      </div>
    </div>
  )
}

export default ToDo