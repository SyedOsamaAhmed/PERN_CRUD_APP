

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect, useState } from 'react';

function DisplayTable() {

const [data,setData]=useState([]);

   const getData=async()=>{
    try {
        const response=await fetch("http://localhost:5000/usersdata");
        const jsonData=await response.json();

        setData(jsonData);
    } catch (err) {
        err instanceof Error
        ? console.error(err.message)
        : console.log("Unknown error");
        
    }
  

    }


    useEffect(()=>{
            getData();
    },[])

   
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User IDS</TableCell>
            <TableCell align="right">Users data</TableCell>
     
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
          
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[1]}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default DisplayTable