import { useCallback, useEffect, useRef, useState } from 'react'
import SearchInput from './components/SearchInput'
import Title from './components/Title'
import Debouncing from './components/Debouncing'
import type { ButtonUpDown, Task } from './type'
import Tasks from './components/Tasks'

function SimpleTodo() {
const [searchQuery,setSearchQuery] = useState('')
const [error,setError] = useState(false)
const getSearchQuery = Debouncing(searchQuery,500).get('searchQuery')
const [data,setData]=useState<Task[]>([{
    id:1,
    title:"Hi Shankar",
    completed:true
}])
const [filterData,setFilterData] = useState<Task[]>(data)
const addTask = useRef<HTMLInputElement>(null)

useEffect(()=>{
    if(!getSearchQuery){
        setFilterData(data)
        return
    }

    setFilterData(data.filter(({title})=> title.toLowerCase().includes(getSearchQuery.toLowerCase())))
  

},[getSearchQuery])

useEffect(()=>{

    if(!error) return;

    const timer = setTimeout(()=>{
           if(error){
        setError(false)
    }
    },2000)
},[error])

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(e.target.value)
}

const handleTaskChange = useCallback((id:number)=>{
        setFilterData((prev) =>
            prev.map((props) =>
            id === props.id ? { ...props, completed: !props.completed } : props
            )
        );
},[])

const handleAddTask =()=>{
    if(!addTask.current?.value){
        setError(true)
        return
    }

    const newTask= {
        id:Date.now(),
        title:addTask.current?.value,
        completed:false
    }

    setFilterData((prev)=>{
        return[...prev,newTask]
    })
    setData((prev)=>{
        return[...prev,newTask]
    })
    addTask.current.value=""
}


const handleDelete = useCallback((id:number)=>{
    setFilterData((prev)=>{
        return prev.filter((props)=>props.id !== id)
    })
},[])

const handleUpDownTask = useCallback((index:number,type:ButtonUpDown)=>{

    setFilterData((prev)=>{
            let temp;
            let update =  [...prev]
        if(type === "up" && index > 0){
            temp= update[index - 1]
           update[index-1] = update[index]
           update[index] = temp 
           return update
        }else if (type === "down" && index < prev.length - 1){
            temp = update[index + 1]
            update[index+1] = update[index]
            update[index] = temp
            return update
        }
        return prev
    })
}
,[])

  return (
    <div>
            <Title title={"Simple TODO"}/>
            <div>   
                <SearchInput value={searchQuery} placeholder={"Search Task"} name={"searchQuery"} handleChange={handleChange}  />
            </div>
            <div className='border w-fit p-2 rounded-md flex gap-2'>
                    <div>
                        <input className='focus:outline-none border-b ' placeholder='Add Task' ref={addTask}/>
                        {error&&(<p className='text-xs text-red-700'>Please Enter Task</p>)}
                    </div>
                    <button className='border rounded-4xl p-2' onClick={handleAddTask}>Add Task</button>
            </div>
            <Tasks handleUpDownTask={handleUpDownTask} handleDelete={handleDelete} handleTaskChange={handleTaskChange} data={filterData}/>
    </div>
  )
}

export default SimpleTodo