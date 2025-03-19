import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './store/auth.jsx';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <App />
    <ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
draggable
theme="colored"
toastStyle={{
    fontFamily: 'Urbanist',  // Change the font
  }}/>
    </AuthProvider>
)
