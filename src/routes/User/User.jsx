import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UploadProduct from '../../components/Add/UploadProduct';
import './User.scss';
import phone from '../../assets/pngimg.com - iphone_14_PNG24.png';


const User = () => {
  const myTasks = [
    {
      name: 'My Orders'
    },
    {
      name: 'Add product'
    },
    {
      name: 'Wish list'
    },
  ]
  const [activeTab, setActiveTab] = useState('orders');
  const { username } = useParams();
  const { auth } = useAuth();
  const orders = useSelector((store) => store.order);
  const {products} = useSelector((store) => store.product);
  const newProds = [...products];
  
  const handleDisplay = (tab) => {
    setActiveTab(tab)
  }
  
  const shuffleprods = (products) => {
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]]
    }
  }
  shuffleprods(newProds)

  const suggestedProds = newProds.slice(1, 4);

  return (
    <div className='user-profile'>
      <h1>hello {username}</h1>
      <div className="profile-container">
        <div className="left-profile">
          <div className="identity common-bg">
            <img src="" alt="" />
            <div className="names">
              <h3>{auth.userInfo ? auth?.userInfo?.firstname : "Benedict"}</h3>
              <h3>{auth.userInfo ? auth?.userInfo?.lastname : "Makomo"}</h3>
            </div>
            <div className="id-btn">
              <button>Edit</button>
            </div>
          </div>
          <div className="transactions common-bg">
            {myTasks.map((task, index) => (
              <button
                key={index}
                onClick={()=> handleDisplay(task?.name.toLowerCase())}
              >
                {task?.name}
              </button>
            ))}
          </div>
        </div>

        <div className="right-profile">
          <div className="active-tabs common-bg">
            {activeTab.includes('product') && (
              <div className='user-products'>
                <UploadProduct />
              </div>
            )}

            {activeTab.includes('order') && (
              <div className="user-orders">
                <ul>
                  {orders.length ? orders.map((order) => (
                    <li key={order.id} className='profile-order'>
                      <NavLink to={`/order/${order.id}`}><p>{order.id}</p></NavLink>
                      <p>{order.createdAt}</p>
                      <p>{order.status}</p>
                      <p>{order.total}</p>
                    </li>
                  )) : <li className='empty-orders'>
                    <p>No active order</p>
                    <p>Go to the store, add products to your cart then make an order</p>
                  </li>}
                </ul>
              </div>
            )}

            {activeTab.includes('wish') && (
              <div className="user-wish">
                <p>Wish list coming soon</p>
              </div>
            )}
          </div>
          <div className="profile-suggestions">
            <h3>Recommended products</h3>
            <ul className="">
              {suggestedProds.map((product) => (
                <li key={product._id} >
                <NavLink to={`/product/${product._id}`} className='flex-center'>
                  <img src={phone} alt={product.title} loading='lazy'/>
                  <div className="suggested-details">
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                  </div>
                </NavLink>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;