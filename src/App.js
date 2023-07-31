import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Home, Login, Register, NotFound, ProductDetails, Unauthorized, User, Admin, Shipping, Store, Cart, Category, Order, AllCat } from './routes';
import { toggleWelcome } from './redux/slices/modals/modals';
// import RequireAuth from './components/RequireAuth';
// import PersistLogin from './components/PersistLogin';
// import { getProducts } from './redux/slices/products/productSlice';
// import { getCategory } from './redux/slices/category/category';

// const ROLES = {
//   "admin": parseInt(process.env.REACT_APP_ADMIN_ROLE),
//   "seller": parseInt(process.env.REACT_APP_SELLER_ROLE),
//   "user": parseInt(process.env.REACT_APP_USER_ROLE)
// }

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleWelcome());

    setTimeout(() => {
      dispatch(toggleWelcome());
    }, 20000)
  }, [])
  // useEffect(() => {
  //   dispatch(getProducts());
  //   dispatch(getCategory());
  // })

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}

          {/* <Route element={<PersistLogin />}> */}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/category/:category/' element={<Category />} />
          <Route path='/category' element={<AllCat />} />
          <Route path='/order/:id/' element={<Order />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
          <Route path='/store' element={<Store />} />
          {/* <Route path='/shipping' element={<Shipping />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin' element={<Admin />} /> */}
          {/* user routes */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.user]} />} > */}
          <Route path='/profile/:username' element={<User />} />
          {/* </Route > */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.seller, ROLES.admin]} />} > */}
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/cart' element={<Cart />} />
          {/* </Route> */}
          {/* Protected routes */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />} > */}
          <Route path='/admin' element={<Admin />} />
          {/* // </Route> */}
        </Route>
      </Routes >
    </>
  )
}

export default App