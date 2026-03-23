
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo } from 'react';

function BasicTable({tasks,DeleteTask,updateStatus,handleOpen}) {

  console.log('Rendering Table')
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(({id,title,status}) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="right">
                   
                    <InputLabel sx={{display:"none"}} id={`status-label-${id}`}>Status</InputLabel>
                    <Select
                      labelId={`status-label-${id}`}   // links label and select
                      id={`status-${id}`}
                      name="status"
                      value={status}
                      label="Status"
                      onChange={(e) => updateStatus(id, e.target.value)}
                    >
                      <MenuItem value="inComplete">In-Complete</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                    </Select>
              </TableCell>
              <TableCell align="right">
                    <Tooltip sx={{cursor:"pointer"}} title='Edit' onClick={()=>handleOpen({id,title,status})}>
                            <EditIcon/>
                    </Tooltip>
                    <Tooltip sx={{cursor:"pointer"}} title='Delete' onClick={()=>DeleteTask(id)}>
                            <DeleteIcon sx={{color:'red'}}/>
                    </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default  memo(BasicTable)