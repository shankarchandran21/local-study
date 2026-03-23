import React, { useState } from 'react'
import PaginationExample from './Pagination'

function About() {
const [gender,setGender] = useState('')
const [city,setCity] = useState("")

  return (
    <div>
       <div>
            <input placeholder='Male' type='radio' name='male' value={"male"} checked={gender === "male"} onChange={(e)=>setGender(e.target.value)}/>
            <input placeholder='Female' type='radio' name='female' value={"female"} checked={gender === "female"} onChange={(e)=>setGender(e.target.value)}/>
       </div>
       <div>
            <select name='city' value={city} title='city' onChange={(e)=>setCity(e.target.value)}>
                    <option value="">Choose</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="chennai">Chennai</option>
            </select>
            <h1>City : {city}</h1>
            <PaginationExample/>
       </div>
    </div>
  )
}

export default About