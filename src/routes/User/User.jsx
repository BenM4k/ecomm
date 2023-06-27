import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();
  const users = useSelector((store) => store.user.users);
  return (
    <>
      {users.map((user) => (
        user?.username === username ? <div key={user.firstname}>
          <h1>{user.firstname}</h1>
          <h2>{user.lastname}</h2>
          <h3>{user.username}</h3>
        </div> :
          <div></div>
      ))}
    </>
  )
}

export default User