import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Home, Login, Register, NotFound, ProductDetails, Unauthorized, User, Admin, Shipping, Store, Cart } from './routes';
import RequireAuth from './components/RequireAuth';
import { getProducts, getCategory } from './redux/slices/products/productSlice';

const ROLES = {
  "admin": process.env.REACT_APP_ADMIN_ROLE,
  "seller": process.env.REACT_APP_SELLER_ROLE,
  "user": process.env.REACT_APP_USER_ROLE
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  })

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path='/store' element={<Store />} />
        {/* user routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.user]} />} >
          <Route path='/profile/:username' element={<User />} />
        </Route >
        <Route element={<RequireAuth allowedRoles={[ROLES.seller, ROLES.admin]} />} >
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        {/* Protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />} >
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Route>
    </Routes >
  )
}

export default App