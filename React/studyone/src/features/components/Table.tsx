import React, { useState } from 'react'
import type { Category, TaskData } from '../type'
import Arrow from '../svg/Arrow'

function Table({data,handleChangeStatus}:{data:TaskData,handleChangeStatus:(value:string,category:Category,id:number)=>void}) {
    

    
  return (
    <table className=' p-10 w-full border-t-[1px] border-gray-300'>
            <thead>
                    <th className='text-left text-sm font-medium '>Id</th>
                    <th className='text-left text-sm font-medium'>Title</th>
                    <th className='text-left text-sm font-medium'>Status</th>
                    <th className='text-left text-sm font-medium'>Action</th>
            </thead>
            <tbody >
                {Object.entries(data).map(([category,tasks],index)=>(
                <>
                    <tr  className={`${index === 0 ?"bg-green-500":index === 1?"bg-pink-500":"bg-blue-400"}`}>
                         <td style={{padding:"8px"}} colSpan={3} className='rounded-tl-md text-m font-normal'>
                                {category} ({tasks.length})
                         </td>
                         <td style={{padding:"8px"}} className='cursor-pointer text-right flex items-end justify-end w-full rounded-tr-md '><Arrow/></td>
                    </tr>
                    {
                        tasks.map(({id,title,status},taskIndex)=>{ 
                            const lastindex = tasks.length-1 === taskIndex
                            return <tr className={`bg-gray-200  border-gray-300 ${lastindex?"":"border-b max-w-5 overflow-scroll"}`}>
                            <td style={{padding:"5px"}} className={` w-[4%] ${lastindex?'rounded-bl-md':""}`}>{id}</td>
                            <td className={`w-[46%] ${index === 0 ?'line-through':""}`}>{title}</td>
                            <td className={`w-[10%]${index === 0 ?'line-through':""}`}>
                                <select title='status' name='status' value={status} onChange={(e)=>handleChangeStatus(e.target.value,category as Category,id)}>
                                        <option value={'completed'}>completed</option>
                                        <option value={'pending'}>Pending</option>
                                        <option value={'inprogress'}>In-progress</option>
                                </select>
                            </td>
                            <td className={`w-[10%] ${lastindex?'rounded-br-md':""}`}>Delete</td>
                    </tr>
                        })
                    }
                     <tr>
                        <td colSpan={3} className="h-4"></td>
                    </tr>
                </>
                ))}
            
            </tbody>
    </table>
  )
}

export default Table