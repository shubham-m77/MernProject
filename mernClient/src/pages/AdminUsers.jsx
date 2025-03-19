import {React,useEffect, useState }from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
const AdminUsers = () => {
  const {authToken}=useAuth();
  const [users,setUsers]=useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
  
const usersData=async()=>{
  try {
    const response=await fetch(`${process.env.SERVER_URL}/api/admin/users`,{
      method:"GET",
      headers:{
        "Authorization":authToken
      }
    });
    const data=await response.json();
    setUsers(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  usersData();
},[authToken]);

// Deleting the user
const deleteUser= async(id)=> {
  try {
    const response=await fetch(`${process.env.SERVER_URL}/api/admin/users/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Authorization":authToken
      }
    });
    const data=await response.json();
    if(response.ok){
      usersData();
      toast.success(data.msg); 
    }
    else{
      toast.error(data.msg); 
    } 
   
   
    
  } catch (error) {
    console.log(error);
  }
}
// for confirming delete
const handleDeleteClick = (id) => {
  setUserToDelete(id);
  setShowConfirm(true);
};

// Handle confirmation of deletion
const handleConfirmDelete = () => {
  if (userToDelete) {
    deleteUser(userToDelete);
  }
  setShowConfirm(false);
};

// Handle cancel delete
const handleCancelDelete = () => {
  setShowConfirm(false);
  setUserToDelete(null);
};
return (<div>
  <div className="users-container">
    <h1 className="">Users</h1>
  <hr className="box-border" />
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Role</th>
          <th>Actions</th> {/* Placeholder for edit/delete actions */}
        </tr>
      </thead>
      <tbody>
        {users.map((curUser, index) => (
         
          <tr key={index}>
            <td>{curUser._id}</td>
            <td>{curUser.username}</td>
            <td>{curUser.email}</td>
            <td>{curUser.mobile}</td>
            <td>{curUser.isAdmin ? 'Admin' : 'User'}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" ><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></button>
              <button className="btn btn-danger btn-sm" onClick={()=>handleDeleteClick(curUser._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
     {/* Confirmation Modal */}
     {showConfirm && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h5 className="text-dark">Are you sure you want to delete this User?</h5>
            <button onClick={handleConfirmDelete} className="btn btn-primary">Yes, Delete</button>
            <button onClick={handleCancelDelete} className="btn btn-danger">Cancel</button>
          </div>
        </div>
      )}
  </div>
  <Footer/>
  </div>
);
};

export default AdminUsers
