import { Routes, Route } from 'react-router-dom';

import {Footer, Navbar, Login, Cart } from './components';
import { Home, ProductDetails, NotFound, User } from './routes';
function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/profile/:name' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
