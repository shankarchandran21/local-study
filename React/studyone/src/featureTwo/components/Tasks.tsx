import React, { memo } from 'react'
import type { ButtonUpDown, Task } from '../type'

function Tasks({data,handleTaskChange,handleDelete,handleUpDownTask}:{data:Task[],handleTaskChange:(id:number)=>void,handleDelete:(id:number)=>void,handleUpDownTask:(i:number,type:ButtonUpDown)=>void}) {

    console.log("RENDER")
  return (
    <ul  className="space-y-2 p-2">
            {data.map(({id,title,completed},index)=>{
                return <li className='flex justify-between gap-2.5 border p-2 rounded-md transition-all duration-300'  key={id}>
                        <h1 className='flex-1'>{id}.</h1>
                        <div  className='flex flex-2'>
                            <label  className="flex items-ce gap-2 cursor-pointer">
                            <input
                            type="checkbox"
                            checked={completed}
                            onChange={()=>handleTaskChange(id)}
                            placeholder='Task'
                            />
                        </label>
                            <h1 className={`${completed?"line-through":""}`}>{title}</h1>
                        </div>
                        <button className='cursor-pointer' onClick={()=>handleDelete(id)}>Delete</button>
                        <button className='cursor-pointer' onClick={()=>handleUpDownTask(index,"up")}>Up</button>
                        <button className='cursor-pointer' onClick={()=>handleUpDownTask(index,"down")}>Download</button>
                    </li>
            })}
    </ul>
  )
}

export default memo(Tasks)