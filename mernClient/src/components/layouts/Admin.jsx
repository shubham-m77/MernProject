import React from 'react'
import admin_img from "./images/admin_page.png";
import { Link, Navigate } from 'react-router-dom'
import "./Admin.css";
import Footer from '../Footer'
import {useAuth} from "../../store/auth.jsx";
const Admin = () => {
    const {isLoading,uData}=useAuth();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!uData.isAdmin){
        return <Navigate to="/" />;
    }
  return (
    <>
      <div className="admin-container">
      <div className="row">
        <div className="col-md-6"><div className="admin-img">
        <img src={admin_img} alt="admin_img" />
      </div></div>
        <div className="col-md-6">
          <div className="admin-text">
            <h5>Hey Admin,</h5>
            <h1>Welcome to Admin Panel</h1>
            <h6 className=''>Here You can manage your users data & its contacts/messages.</h6>
            <button className='btn btn-primary btn-sm'><Link to="/admin/users" className='text-light'>Check users</Link></button>
          </div>
        </div>
      </div>
   
      </div>
      <Footer className="mb-5"/>
    </>
  )
}

export default Admin
