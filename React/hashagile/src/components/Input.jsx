import { TextField } from '@mui/material'
import React, { memo } from 'react'

function Input({label,handleAddTaskOnchange,value,name,error,helperText}) { 

  return (<TextField 
      sx={{width:"100%"}}
      error={error}         
      helperText={error?helperText:""}  
      value={value} 
      onChange={handleAddTaskOnchange} 
      name={name}  
      label={label} 
      variant="outlined" />)
}

export default memo(Input)
