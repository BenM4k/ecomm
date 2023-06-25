import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Login, SignIn, Layout, RequireAuth } from './components';
import { Home, ProductDetails, NotFound, User, Admin, Unauthorized, Seller } from './routes';
import { getProducts } from './redux/slices/products/productSlice';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const roles = {
    'admin': process.env.REACT_APP_ADMIN_ROLE,
    'seller': process.env.REACT_APP_SELLER_ROLE,
    'user': process.env.REACT_APP_USER_ROLE,
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignIn />} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={roles.user} />}>
            <Route path='/profile/:username' element={<User />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={roles.seller} />}>
            <Route path='/seller' element={<Seller />} />
          </Route>
          {/* Admin routes */}
          <Route element={<RequireAuth allowedRoles={roles.admin} />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
          {/* {catch all routes} */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
