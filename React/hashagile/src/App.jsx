
import { Grid, Button, Box,  Modal, Select, MenuItem, RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material';
import './App.css';
import { Input, Title } from './components';
import { useCallback,  useEffect,  useMemo, useState } from 'react';
import useLocalStorage from './hooks/useLocalStroage';
import { generateId } from './function';
import BasicTable from './components/Table';
import useDebouncing from './hooks/useDebouncing';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:2
};


function App() {
const [addTask,setAddTask] = useState('') // Create task State
const [searchFilter,setSearchFilter] = useState('') // mange searchField state
const searchQuery = useDebouncing(searchFilter) // using Debouncing query state
const [tasks, setTasks] = useLocalStorage("tasks", [],searchQuery); // using localStorage persistent tasks
const [open, setOpen] = useState(false); // open close modal 
const [error,setError] = useState({addTask:false,editTask:false}) // handling error state
const [editTask,setEditTask] = useState({id:"",title:"",status:""}) // edit Task state
const [statusFilter, setStatusFilter] = useState("all"); // filter status state


// handle Status filter
const handleStatusFilterChange = (e) => {
  setStatusFilter(e.target.value);
}

// filtering functionality
const filteredTasks = useMemo(() => {
  let filtered = tasks;

  if (searchQuery) {
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (statusFilter !== "all") {
    filtered = filtered.filter(task => task.status === statusFilter);
  }

  return filtered;
}, [tasks, searchQuery, statusFilter]);


// handling onChange for AddTask
const handleAddTaskOnchange = useCallback((e) => {
  
  const { value} = e.target;
    setAddTask(value); 
    if(error.addTask && value){
      setError((prev)=>{
        return {...prev,addTask:false}
      })
    }

},[])


// handling add task for clicking addTask button
const handleAddTask = ()=>{

  if (addTask.trim() === ""){

    setError((prev)=>{
      return{...prev,addTask:true}
    })
    setTimeout(()=>{
      setError((prev)=>{
        return{...prev,addTask:false}
      })
    },2000)
    return
  }

  const createTask ={
    id:generateId(),
    status:'inComplete',
    title:addTask
  }
    setTasks((prev)=>{
      return [...prev,createTask]
    })
    setAddTask("");
}

// handle searchFilter not debouncing state
const handleSearch = useCallback((e)=>{
setSearchFilter(e.target.value)
},[])

// handle Delete Task 
const DeleteTask = useCallback((id)=>{
  setTimeout(()=>{
      setTasks((prev)=>{
    return prev.filter((props)=>props.id !== id )
  })
  },5000)

},[])

useEffect(()=>{
   setTimeout(()=>{
    console.log("Tasks after 5 seconds delay:");
  },5000)

  return ()=>{}
},[])

// updating status using table
const updateStatus = useCallback((id, newStatus)=>{
setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    )
  );
},[])

// handling editTask modal onChange
const handleEditTask = useCallback((e)=>{
const {name,value} = e.target
if(name ==="title" && value){
   setError((prev)=>{
        return{...prev,editTask:false}
      })
}



setEditTask((prev)=>{
  return {...prev,[name]:value}
})
},[])

// Close Modal
  const handleClose = () => {
    setOpen(false);
    setEditTask({id:"",status:"",title:""})
  };

  // save editTask
 const handleEditTaskSave = ()=>{
  if(!editTask.title){
    setError((prev)=>{
      return {...prev,editTask:true}
    })
    setTimeout(()=>{
      setError((prev)=>{
        return{...prev,editTask:false}
      })
    },2000)
    return
  }

  setTasks((prev) =>
    prev.map((task) =>
      task.id === editTask.id ? { ...task,...editTask  } : task
    )
  );
  handleClose()


  }

  // open edit modal
  const handleOpen = useCallback(({id,title,status})=>{
    setOpen(true);
    setEditTask({id,title,status})

  },[])


 


  return (
    <Grid>
       <Title title={'TODO'}/>
       <Grid sx={{display:"flex",alignItems:'center',gap:5}}>
          <Box sx={{display:"flex",alignItems:"center",gap:2}}>
              <Input helperText="Please Add Task" error={error.addTask} handleAddTaskOnchange={handleAddTaskOnchange} name="addTask" value={addTask} label="Add Task" />
              
              <Button onClick={handleAddTask} variant="contained">Add Task</Button>
          </Box>
          <Box>
            <Input handleAddTaskOnchange={handleSearch} name="searchFilter" value={searchFilter} label="Search" />
          </Box>
          <Box>
               <FormControl component="fieldset">
                <RadioGroup
                  row
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                >
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                  <FormControlLabel value="inComplete" control={<Radio />} label="Active" />
                  <FormControlLabel value="completed" control={<Radio />} label="Completed" />
                </RadioGroup>
              </FormControl>
          </Box>
       </Grid>
       <Box>
          <BasicTable handleOpen={handleOpen} updateStatus={updateStatus} DeleteTask={DeleteTask} tasks={filteredTasks}/>
       </Box> 
<Modal
  open={open}
  onClose={handleClose}
>
  <Box sx={{ ...style, width: 400,borderRadius:4 }}>
    <Box sx={{display:'flex',justifyContent:"flex-end"}}>
        <Button onClick={handleClose}>
            <HighlightOffIcon/>
        </Button>
    </Box>
    <h2 id="parent-modal-title">Edit Modal</h2>
    <Box mt={2}>
        <Input  helperText="Please Add Task" error={error.editTask} handleAddTaskOnchange={handleEditTask} name="title" value={editTask.title} label="Add Task" />
         <Select      
                        sx={{
                          mt:2
                        }}  
                        name='status'              
                        value={editTask.status}
                        onChange={handleEditTask}
                    >
                        <MenuItem value={'inComplete'}>In-Complete</MenuItem>
                        <MenuItem value={'completed'}>Completed</MenuItem>
            </Select>
    </Box>
    <Button onClick={handleEditTaskSave} sx={{mt:2}} variant="contained">Save</Button>
  </Box>
</Modal>
    </Grid>
  );
}

export default App;
