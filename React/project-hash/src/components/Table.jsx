import React, { useState } from 'react'


const headTitle = ["Id","FirstName","LastName","MiddleName","Age"]
function Table({userList}) {
const [page,setPage] = useState(1)
let itemsPerPage = 5

let LastIndex = page * itemsPerPage
let firstIndex = LastIndex - itemsPerPage
let currentData = userList.slice(firstIndex,LastIndex)
let totalPage = Math.ceil(userList.length/itemsPerPage)





  return (
      <>
           <table>
            <thead>
                <tr>
                  {headTitle.map((val)=>{
                        return <th key={val}>{val}</th>
                    })}
                </tr>
                  
            </thead>
            <tbody>
                    
                        {currentData.map(({id,firstName,lastName,maidenName,age})=>{
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{maidenName}</td>
                                <td>{age}</td>

                            </tr>
                        })}
                            
                   
            </tbody>
    </table>
    <div>
            <button onClick={()=>setPage((prev)=>prev-1)} disabled={page === 1}>Back</button>
            <button onClick={()=>setPage((prev)=>prev+1)} disabled={page === totalPage} >Next</button>
    </div>
      </>
  )
}

export default Table