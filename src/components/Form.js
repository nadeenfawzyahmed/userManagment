import React from 'react';
import { useFormik } from 'formik';
import { deleteUser,addUser, updateUser}  from '../store/users/user.actions';
import { useDispatch, useSelector, connect } from "react-redux";
import { useEffect, useState } from "react";




export default function Form() {

  const [id, setid] = useState();
    const formik = useFormik({
        initialValues: {
          id: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          setid(values.id)
          //dispatch(deleteUser(values.id))
          //dispatch(addUser(values))
          dispatch(updateUser(values))

        },
      });
      const [open, setIsOpen] = React.useState(false);

const openForm = () => setIsOpen(true);
const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const isFetching = useSelector(({ users }) => users.isFetching);
  const errorMessage = useSelector(({ users }) => users.errorMessage);
  console.log(id);
 
 
 
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="id">ID</label>
    <input
      id="id"
      name="id"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.id}
    />
  <label htmlFor="firstName">First Name</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />
    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
    <label htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

    <button type="submit">Submit</button>
   
  </form>
   
  );
}
