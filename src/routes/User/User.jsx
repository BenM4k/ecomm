import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const User = () => {
  const { name } = useParams();
  const users = useSelector((store) => store.user.users);
  return (
    <>
        { users.map((user) => (
            user.name.toLowerCase() === name ? <div key={user.name}>
                { user.name }
            </div> :
            <div></div>
        ))}
    </>
  )
}

export default User