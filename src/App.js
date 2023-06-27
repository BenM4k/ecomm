import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignedIn } from '@clerk/clerk-react';
import Layout from './components/Layout/Layout';
import { Home, Login, Register, NotFound, ProductDetails, Unauthorized, User, Admin, Shipping, Store } from './routes';
import { getProducts } from './redux/slices/products/productSlice';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
        <Route path='/profile' element={<User />} />
        <Route path='/shipping' element={<Shipping />} />

        {/* Protected routes */}
        <Route
          path='/admin'
          element={
            <SignedIn>
              <Admin />
            </SignedIn>
          }
        />
      </Route>
    </Routes>
  )
}

export default App