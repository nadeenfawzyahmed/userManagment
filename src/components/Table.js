import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { fetchUsers}  from '../store/users/user.actions';
import { useDispatch, useSelector, connect } from "react-redux";

const columns = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName',headerName: 'Last Name',type: 'number',width: 130, },
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const isFetching = useSelector(({ users }) => users.isFetching);
  const errorMessage = useSelector(({ users }) => users.errorMessage);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (errorMessage) return errorMessage;

 // if (isFetching) return <Loader />;
  if (users.length !== 0) {
    console.log(users);
    console.log("done");



  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}}
