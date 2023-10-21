import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { AuthProvider } from './context/authProvider';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import './index.css';
import App from './App';

import { bannerApiSlice } from './redux/slices/banners/banners';
import { categoryApiSlice } from './redux/slices/category/category';
import { productApiSlice } from './redux/slices/products/productSlice';
import { testimonialSlice } from './redux/slices/testimonials/testimonials'
import { usersSlice } from './redux/slices/users/userSlice';

store.dispatch(bannerApiSlice.endpoints.getBanners.initiate());
store.dispatch(categoryApiSlice.endpoints.getCategories.initiate());
store.dispatch(productApiSlice.endpoints.getProducts.initiate());
store.dispatch(testimonialSlice.endpoints.getTestimonials.initiate());
store.dispatch(usersSlice.endpoints.getUsers.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);