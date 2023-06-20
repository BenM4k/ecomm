import { Routes, Route } from 'react-router-dom';

import {Footer, Navbar} from './components';
import { Home, ProductDetails, NotFound } from './routes';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <div className="App"/>
    </>
  );
}

export default App;
