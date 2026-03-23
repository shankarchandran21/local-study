import { Typography } from '@mui/material'
import React, { memo } from 'react'

function Title({title}) {
  return (
    <Typography variant='h4' textAlign={"center"}>
        {title}
    </Typography>
  )
}

export default memo(Title)
