import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/clerk-react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clerKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider
        publishableKey={clerKey}
      >
        <Router>
          <App />
        </Router>
      </ClerkProvider>
    </Provider>
  </React.StrictMode>
);