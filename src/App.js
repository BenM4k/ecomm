import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { NotFound, ProductDetails, Unauthorized, Shipping, Cart, Category, Order, AllCat } from './routes';
// import { toggleWelcome } from './redux/slices/modals/modals';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
// import { getProducts } from './redux/slices/products/productSlice';
// import { getCategory } from './redux/slices/category/category';

const ROLES = {
  "admin": parseInt(process.env.REACT_APP_ADMIN_ROLE),
  "seller": parseInt(process.env.REACT_APP_SELLER_ROLE),
  "user": parseInt(process.env.REACT_APP_USER_ROLE)
}

const Home = lazy(() => import('./routes').then((module) => ({ default: module.Home })));
const Login = lazy(() => import('./routes').then((module) => ({ default: module.Login })));
const Register = lazy(() => import('./routes').then((module) => ({ default: module.Register })));
const User = lazy(() => import('./routes').then((module) => ({ default: module.User })));
const Admin = lazy(() => import('./routes').then((module) => ({ default: module.Admin })));
const Store = lazy(() => import('./routes').then((module) => ({ default: module.Store })));
const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  //   dispatch(getCategory());
  // })

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}

            <Route element={<PersistLogin />}>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/category/:category/' element={<Category />} />
              <Route path='/category' element={<AllCat />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<Register />} />
              <Route path='/unauthorized' element={<Unauthorized />} />
              <Route path='/store' element={<Store />} />

              {/* user routes */}
              <Route element={<RequireAuth allowedRoles={[ROLES.user]} />} >
                <Route path='/order/:id/' element={<Order />} />
                <Route path='/profile/:username' element={<User />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/shipping' element={<Shipping />} />
              </Route >

              <Route element={<RequireAuth allowedRoles={[ROLES.seller, ROLES.admin]} />} >
              </Route>
              {/* Protected routes */}
              <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />} >
                <Route path='/admin' element={<Admin />} />
              </Route>
            </Route>
          </Route>
        </Routes >
      </Suspense >
    </>
  )
}

export default App