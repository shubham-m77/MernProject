import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Logout from './pages/Logout';
import Services from './pages/Services';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import AdminLayouts from './components/layouts/AdminLayouts';
import AdminUpdate from './pages/AdminUpdate';
import Admin from './components/layouts/Admin';
import Footer from "./components/Footer"
const App = () => {
  
  return (
    <div><BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
        <Route path="/logout" element={<Logout />} />
       {/* Admin Routes */}
       <Route path="/admin" element={<AdminLayouts />}>
            <Route index element={<Admin />} />  {/* Admin Dashboard */}
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            {/* <Footer/> */}
          </Route>
      </Routes>
  
       </BrowserRouter>
    </div>
  );
};

export default App;
