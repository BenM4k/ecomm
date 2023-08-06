import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UploadProduct from '../../components/Add/UploadProduct';
import './User.scss';

const User = () => {
  const { username } = useParams();
  const { auth } = useAuth();
  const orders = useSelector((store) => store.order);

  return (
    <div className='user-profile'>
      <h1>hello {username}</h1>
      <h2>First name: {auth.userInfo ? auth?.userInfo?.firstname : "Ben"}</h2>
      <h2>last name: {auth.userInfo ? auth?.userInfo?.lastname : "Mak"}</h2>
      <div>
        <UploadProduct />
      </div>
      <div className="user-orders">
        <ul>
          {orders ? orders.map((order) => (
            <li key={order.id}>
              <NavLink to={`/order/${order.id}`}><p>{order.id}</p></NavLink>
              <p>{order.createdAt}</p>
              <p>{order.customerName}</p>
              <p>{order.status}</p>
              <p>{order.paymentMethod[1]}</p>
            </li>
          )) : <p>No order to display</p>}
        </ul>
      </div>
    </div>
  )
}

export default User;