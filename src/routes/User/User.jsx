import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UploadProduct from '../../components/UploadProduct';
import './User.scss';

const User = () => {
  const { username } = useParams();
  const { auth } = useAuth();
  // const users = useSelector((store) => store.user.users);
  return (
    <div className='user-profile'>
      <h1>hello {username}</h1>
      <h2>First name: {auth?.userInfo?.firstname}</h2>
      <h2>last name: {auth?.userInfo?.lastname}</h2>
      <div>
        {auth.roles.includes(parseInt(process.env.REACT_APP_SELLER_ROLE)) ? <UploadProduct /> : ""}
      </div>
    </div>
  )
}

export default User;