import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const User = () => {
  const { username } = useParams();
  const { auth } = useAuth();
  // const users = useSelector((store) => store.user.users);
  return (
    <>
      <h1>hello {username}</h1>
      <h2>First name: {auth?.userInfo?.firstname}</h2>
      <h2>last name: {auth?.userInfo?.lastname}</h2>
    </>
  )
}

export default User;