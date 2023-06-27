import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const User = () => {
  const { username } = useParams();
  // const users = useSelector((store) => store.user.users);
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      {username === user?.firstName ?
        <section>
          <h1>{user.firstName}</h1>
          <h2>{user.lastName}</h2>
        </section>
        : navigate('/')}
    </>
  )
}

export default User