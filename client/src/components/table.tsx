import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";

interface User {
  id: number;
  post: string;
}

function DisplayTable() {
  const [data, setData] = useState<Array<User>>([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/usersdata");
      const jsonData = await response.json();

      setData(jsonData);
    } catch (err) {
      err instanceof Error
        ? console.error(err.message)
        : console.log("Unknown error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Users IDS</TableCell>
            <TableCell align="left">Users data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((curruser, index) => {
            curruser.id = index + 1;
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{curruser.id}</TableCell>
                <TableCell align="left">{curruser.post}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DisplayTable;
