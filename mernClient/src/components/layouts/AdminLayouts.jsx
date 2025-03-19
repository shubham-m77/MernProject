import React from 'react'
import { FaUser } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { Link,Outlet } from 'react-router-dom'
import "./Admin.css";
const AdminLayouts = () => {
  return (
    <>
    
      <div className="admin-layout-container">
      <header>
      <nav className='nav navbar'>
        <ul>
          <li><Link to="/admin">Home <GoHomeFill/></Link></li>
          <li><Link to="/admin/contacts">Contacts <GrContactInfo/></Link></li>
          <li><Link to="/admin/users">Users <FaUser/></Link></li>
        </ul>
      </nav>
      </header>
      </div>
    <Outlet/>
    
    </>
  )
}

export default AdminLayouts
